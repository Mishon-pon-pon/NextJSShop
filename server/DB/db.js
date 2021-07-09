const sqlite3 = require('sqlite3').verbose();

class DB {
    constructor(fileName) {
        this.dbPath = fileName;
    }

    _dbOpen() {
        this.db = new sqlite3.Database(this.dbPath)
    }

    _serialize(callback) {
        const that = this;
        this._dbOpen();
        this.db.serialize(async function () {
            await callback(that.db);
        });
        this._dbClose()
    }

    _dbClose() {
        this.db.close();
    }

    async get(query) {
        return new Promise((resolve, reject) => {
            this._serialize(() => {
                this.db.all(query, (err, rows) => {
                    if (err) { reject(err) } else {
                        resolve(rows)
                    }
                })
            })
        })
    }

    async push(tableName, data) {
        const [columns, counters, values] = this._parseInsertData(data)
        return new Promise((resolve, reject) => {
            this._serialize((db) => {
                const stmt = db.prepare(`INSERT INTO ${tableName}(${columns}) VALUES (${counters})`)
                stmt.run(...values)
                stmt.finalize((err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve();
                    }
                });
            })
        })

    }

    _parseInsertData(data) {
        const coluns = []
        const values = [];
        for (let key in data) {
            coluns.push(key)
            values.push(data[key])
        }

        return [coluns.join(', '), coluns.map(column => '?').join(', '), values]
    }

    _parseTableSchema(schema) {
        let query = '"CREATE TABLE IF NOT EXISTS goods(GoodId Integer PRIMARY KEY, Name text, Description text, Price integer)"'
        const arr = []
        for (let key in schema) {
            arr.push(`${key} ${schema[key]}`)
        }
        return `(${arr.join(', ')})`
    }

    async createTable(name, schema) {
        const query = `CREATE TABLE IF NOT EXISTS ${name}${this._parseTableSchema(schema)}`

        return new Promise((resolve, reject) => {
            this._serialize((db) => {
                db.run(query, (result, err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                });
            })
        })
    }

    clearTable(tableName) {
        this._serialize((db)=>{
            db.exec(`DELETE FROM ${tableName}`)
        })
    }

}


module.exports = DB;
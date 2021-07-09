const DB = require('./db')

const db = new DB('./db.db');

db.clearTable('goods')
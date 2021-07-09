const Koa = require('koa')
const Router = require('koa-router')
const DB = require('./DB/db')

const app = new Koa();
const router = new Router();
const PORT = 4000

const db = new DB('./DB/db.db')

router.get('/goods', async (ctx, next) => {
    await db.get('select * from goods').then(res => {
        ctx.body = res
    }).catch(err => {
        ctx.throw(err)
    })
})

app.use(router.routes())

app.listen(PORT, () => {
    console.log(`server run on ${PORT}`)
})
const DB = require('./db')

const db = new DB('./db.db');

const GoodsTableSchema = {
    GoodId: 'Integer PRIMARY KEY',
    Name: 'text',
    Description: 'text',
    Price: 'Integer',
    Value: 'Integer',
    imgPath: 'text'
}

db.createTable('goods', GoodsTableSchema)

const Goods = [
    {
        Name: 'Cardamusc Essence de parfum',
        Value: 20,
        Price: 375,
        imgPath: '/png/goodsImg.png',
        Description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
    }, {
        Name: 'Musc Pallida Essence de parfum',
        Value: 20,
        Price: 375,
        imgPath: '/png/product1.png',
        Description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
    }, {
        Name: 'Ambre Narguile Eau de toilette',
        Value: 100,
        Price: 266,
        imgPath: '/png/product2.png',
        Description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
    }, {
        Name: 'Poivre Samarcande Eau de toilette',
        Value: 20,
        Price: 266,
        imgPath: '/png/goodsImg.png',
        Description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
    }, {
        Name: 'Osmanthe Yunnan Eau de toilette',
        Value: 20,
        Price: 266,
        imgPath: '/png/goodsImg.png',
        Description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
    }, {
        Name: 'Vetiver Tonka Eau de toilette',
        Value: 100,
        Price: 266,
        imgPath: '/png/goodsImg.png',
        Description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
    }, {
        Name: `Galop d'Hermes Parfum`,
        Value: 50,
        Price: 215,
        imgPath: '/png/goodsImg.png',
        Description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
    },
]

Goods.forEach(good => {
    db.push('goods', good)
})
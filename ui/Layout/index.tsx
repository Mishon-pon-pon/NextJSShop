import React, { FC } from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { Nav } from "../components/Nav";
import { GoodBar, IGood } from '../components/GoodBar'
import s from "./index.module.scss";



const Goods: Array<IGood> = [
  {
    id: 1,
    name: 'Cardamusc Essence de parfum',
    value: 20,
    price: 375,
    imgPath: '/png/goodsImg.png',
    description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
  }, {
    id: 2,
    name: 'Musc Pallida Essence de parfum',
    value: 20,
    price: 375,
    imgPath: '/png/product1.png',
    description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
  }, {
    id: 3,
    name: 'Ambre Narguile Eau de toilette',
    value: 100,
    price: 266,
    imgPath: '/png/product2.png',
    description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
  }, {
    id: 4,
    name: 'Poivre Samarcande Eau de toilette',
    value: 20,
    price: 266,
    imgPath: '/png/goodsImg.png',
    description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
  }, {
    id: 5,
    name: 'Osmanthe Yunnan Eau de toilette',
    value: 20,
    price: 266,
    imgPath: '/png/goodsImg.png',
    description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
  }, {
    id: 6,
    name: 'Vetiver Tonka Eau de toilette',
    value: 100,
    price: 266,
    imgPath: '/png/goodsImg.png',
    description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
  }, {
    id: 7,
    name: `Galop d'Hermes Parfum`,
    value: 50,
    price: 215,
    imgPath: '/png/goodsImg.png',
    description: `A garden full of life, generous and sparkling, where the scents of green mango, lotus blossom and rush blend with incense and sycamore wood.`
  },
]

export const Layout: FC = () => {
  return (
    <div className={s.Layout}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2}>
          <Nav />
        </Grid>
        <Grid item xs={12} sm={10}>
          <div className={s.Goods}>{Goods.map((item, index) => {
            return <GoodBar {...item} key={item.id} />
          })}</div>
        </Grid>
      </Grid>
    </div>
  );
};

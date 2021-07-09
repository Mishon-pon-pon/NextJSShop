import React, { FC } from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { Nav } from "../components/Nav";
import { GoodBar } from '../components/GoodBar'
import { useAppSelector } from "../store/hooks";
import s from "./index.module.scss";

const Layout: FC = () => {
  const Goods = useAppSelector(state => state.goods.goods)
  return (
    <div className={s.Layout}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2}>
          <Nav />
        </Grid>
        <Grid item xs={12} sm={10}>
          <div className={s.Goods}>{Goods.map((item, index) => {
            return <GoodBar {...item} key={item.GoodId} />
          })}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
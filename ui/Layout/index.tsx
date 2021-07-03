import React, { FC } from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { Nav } from "../components/Nav";
import s from "./index.module.scss";

export const Layout: FC = () => {
  return (
    <div className={s.Layout}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2}>
          <Nav />
        </Grid>
        <Grid item xs={12} sm={10}>
          <div>World</div>
        </Grid>
      </Grid>
    </div>
  );
};

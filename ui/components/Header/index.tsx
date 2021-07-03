import React, { FC } from "react";
import styles from "./index.module.scss";
import Logo from "../../../assets/svg/logo.svg";
import { Menu } from "../Menu";
import { Search } from "../Search";
import { Basket } from "../Basket";

export const Header: FC = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <Menu />
      <div className={styles.SearchBasket}>
        <Search />
        <Basket />
      </div>
    </div>
  );
};

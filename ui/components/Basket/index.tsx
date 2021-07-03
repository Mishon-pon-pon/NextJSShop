import { Badge } from "@material-ui/core";
import React, { FC, useState } from "react";
import BasketIcon from "../../../assets/svg/basket.svg";
import s from "./index.module.scss";

export const Basket: FC = () => {
  const [invisible, setInvisible] = useState(false);
  return (
    <div className={s.Basket}>
      <Badge color="secondary" variant="dot" invisible={invisible}>
        <BasketIcon />
      </Badge>
    </div>
  );
};
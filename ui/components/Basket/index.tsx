import { Badge } from "@material-ui/core";
import React, { FC, useState } from "react";
import BasketIcon from "../../../assets/svg/basket.svg";
import { useAppSelector } from "../../store/hooks";
import s from "./index.module.scss";

export const Basket: FC = () => {
  const counterGoods = useAppSelector(state => state.counter.value)
  const [invisible, setInvisible] = useState(false);
  return (
    <div className={s.Basket}>
      <Badge color="secondary" variant="dot" invisible={invisible}>
        <BasketIcon />
        {counterGoods}
      </Badge>
    </div>
  );
};

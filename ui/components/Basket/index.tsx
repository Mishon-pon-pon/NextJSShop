import { Badge } from "@material-ui/core";
import React, { FC, useState } from "react";
import { useEffect } from "react";
import BasketIcon from "../../../assets/svg/basket.svg";
import { useAppSelector } from "../../store/hooks";
import s from "./index.module.scss";

export const Basket: FC = () => {
  const counterGoods = useAppSelector(state => state.basket.products)
  const [invisible, setInvisible] = useState(true);

  useEffect(() => {
    if (Object.keys(counterGoods).length > 0) {
      setInvisible(false)
    } else {
      setInvisible(true)
    }
  }, [counterGoods])

  return (
    <div className={s.Basket}>
      <Badge color="secondary" variant="dot" invisible={invisible}>
        <BasketIcon />
        {Object.keys(counterGoods).map(item => {
          return counterGoods[item]
        }).reduce((prev: number, next: number) => {
          return prev + next;
        }, 0)}
      </Badge>
    </div>
  );
};

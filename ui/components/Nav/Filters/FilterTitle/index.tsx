import React, { FC } from "react";
import s from "./index.module.scss";

interface IProps {
  title: string;
  icon?: React.ReactNode;
}

export const FilterTitle: FC<IProps> = ({ title, icon }) => {
  return (
    <div className={s["Filters-Title"]}>
      <div className={s["Filters-Title__icon"]}>{icon}</div>
      <span className={s["Filters-Title__text"]}>{title}</span>
    </div>
  );
};

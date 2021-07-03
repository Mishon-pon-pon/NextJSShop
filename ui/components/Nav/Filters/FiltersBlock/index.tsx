import React, { FC } from "react";
import { FilterTitle } from "../FilterTitle";
import s from "./index.module.scss";

interface IProps {
  title: string;
  icon?: React.ReactNode;
}

export const FilterBlock: FC<IProps> = ({ title, icon, children }) => {
  return (
    <div className={s["Filter-Block"]}>
      <div className={s["Filter-Block__title"]}>
        <FilterTitle title={title} icon={icon} />
      </div>
      <div>{children}</div>
    </div>
  );
};

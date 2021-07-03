import React, { FC } from "react";
import s from "./index.module.scss";

export const Menu: FC = () => {
  return (
    <React.Fragment>
      {ConfigMenu.map((menuItem) => {
        return <div className={s["Menu-Item"]}>{menuItem.label}</div>;
      })}
    </React.Fragment>
  );
};

const ConfigMenu = [
  {
    label: "The Exclusives",
  },
  {
    label: "The Founders",
  },
  {
    label: "The ExclusivesThe Art Of Living",
  },
  {
    label: "The Exclusives",
  },
  {
    label: "Women",
  },
  {
    label: "Men",
  },
];

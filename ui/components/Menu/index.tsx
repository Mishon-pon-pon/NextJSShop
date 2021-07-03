import React, { FC } from "react";
import s from "./index.module.scss";

export const Menu: FC = () => {
  return (
    <React.Fragment>
      {ConfigMenu.map((menuItem) => {
        return <div key={menuItem.id} className={s["Menu-Item"]}>{menuItem.label}</div>;
      })}
    </React.Fragment>
  );
};

const ConfigMenu = [
  {
    label: "The Exclusives",
    id: 1
  },
  {
    label: "The Founders",
    id: 2
  },
  {
    label: "The ExclusivesThe Art Of Living",
    id: 3
  },
  {
    label: "The Exclusives",
    id: 4
  },
  {
    label: "Women",
    id: 5
  },
  {
    label: "Men",
    id: 6
  },
];

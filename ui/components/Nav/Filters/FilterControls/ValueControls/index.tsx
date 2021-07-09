import { Button } from "@material-ui/core";
import React, { FC, useState } from "react";
import s from "./index.module.scss";

const Config = [
  {
    title: "20ml",
    value: 1,
  },
  {
    title: "50ml",
    value: 2,
  },
  {
    title: "100ml",
    value: 3,
  },
  {
    title: "125ml",
    value: 4,
  },
  {
    title: "200ml",
    value: 5,
  },
];

export const ValueControls: FC = () => {
  return (
    <div className={s.ValueControls}>
      {Config.map((item) => {
        return <ValueControlsItem key={item.value} title={item.title} />;
      })}
    </div>
  );
};

const ValueControlsItem = ({ title }: { title: string }) => {
  const [select, setSelect] = useState(false);

  const activeStyle = select ? s.ValueControls__item__checked : "";

  return (
    <div
      className={[s.ValueControls__item, activeStyle].join(" ")}
      onClick={() => {
        setSelect((select) => !select);
      }}
    >
      {title}
    </div>
  );
};

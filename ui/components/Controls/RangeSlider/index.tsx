import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import s from "./index.module.scss";

export const RangeSlider = () => {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className={s.RangeSlider}>
      <Slider
        value={value}
        onChange={handleChange}
        max={200}
        valueLabelDisplay="off"
      />
      <div className={s["RangeSlider__values"]}>
        <div>{`$${value[0]}`}</div>
        <div>{`$${value[1]}`}</div>
      </div>
    </div>
  );
};

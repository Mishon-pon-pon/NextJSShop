import { Checkbox } from "@material-ui/core";
import React, { FC, useState } from "react";
import CheckBoxIcon from "../../../../assets/svg/CheckBox.svg";
import CheckBoxCheckedIcon from "../../../../assets/svg/CheckBoxChecked.svg";
import s from "./index.module.scss";

interface IProps {
  title?: string;
}

export const CheckBoxControl: FC<IProps> = ({ title }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <label className={s.CheckBox__Label}>
        <Checkbox
          value={checked}
          size="medium"
          icon={<CheckBoxIcon className={s.CheckBox} />}
          checkedIcon={<CheckBoxCheckedIcon className={s.CheckBox__checked} />}
          onChange={() => {
            setChecked((checked) => !checked);
          }}
        />
        {title}
      </label>
    </div>
  );
};

import React, { FC } from "react";
import { CheckBoxControl } from "../../../../Controls/CheckBox";

export const TypeControls: FC = () => {
  return (
    <>
      <CheckBoxControl title="Perfumes" />
      <CheckBoxControl title="Refills" />
    </>
  );
};

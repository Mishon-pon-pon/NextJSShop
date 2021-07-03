import React, { FC } from "react";
import { FilterBlock } from "./FiltersBlock";
import FiltersIcon from "../../../../assets/svg/filters.svg";
import { TypeControls } from "./FilterControls/TypeControls";
import s from "./index.module.scss";
import { ValueControls } from "./FilterControls/ValueControls";
import { RangeSlider } from "../../Controls/RangeSlider";

export const Filters: FC = () => {
  return (
    <div className={s["Filters"]}>
      <div className={s["Filters__item"]}>
        <FilterBlock title="Sort by:" icon={<FiltersIcon />}>
          <TypeControls />
        </FilterBlock>
      </div>
      <div className={s["Filters__item"]}>
        <FilterBlock title="Volume">
          <ValueControls />
        </FilterBlock>
      </div>
      <div className={s["Filters__item"]}>
        <FilterBlock title="Price">
          <RangeSlider />
        </FilterBlock>
      </div>
    </div>
  );
};

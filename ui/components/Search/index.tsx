import { TextField } from "@material-ui/core";
import React, { FC } from "react";
import SearchIcon from "../../../assets/svg/search.svg";
import s from "./index.module.scss";

export const Search: FC = () => {
  return (
    <div className={s.Search}>
      <TextField id="standard-search" label="Поиск" type="search" />
      <SearchIcon className={s["Search-Icon"]} />
    </div>
  );
};

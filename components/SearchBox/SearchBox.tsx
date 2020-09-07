import * as React from "react";
import {
  SearchSelector,
  WhereInput,
  WhenInput,
  EventsInput,
  PlacesInput,
} from "./Parts";
import css from "./SearchBox.module.scss";

export const SearchBox: React.FC = () => {
  return (
    <div className={css.searchBox}>
      <SearchSelector></SearchSelector>
      <WhereInput></WhereInput>
      <WhenInput></WhenInput>
      <EventsInput></EventsInput>
      <PlacesInput></PlacesInput>
      <button className={css.searchButton}>Search</button>
    </div>
  );
};

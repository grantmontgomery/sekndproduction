import * as React from "react";
import {
  SearchSelector,
  WhereInput,
  WhenInput,
  EventsInput,
  PlacesInput,
} from "./Parts";
import css from "./SearchBox.module.scss";
import { EventEmitter } from "events";

export const SearchBox: React.FC = () => {
  return (
    <div className={css.searchBox}>
      <SearchSelector></SearchSelector>
      <WhereInput></WhereInput>
      <WhenInput></WhenInput>
      <EventsInput></EventsInput>
      <PlacesInput></PlacesInput>
    </div>
  );
};

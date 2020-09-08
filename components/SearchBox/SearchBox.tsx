import * as React from "react";
import {
  SearchSelector,
  WhereInput,
  WhenInput,
  EventsInput,
  PlacesInput,
} from "./Parts";
import Link from "next/link";
import css from "./SearchBox.module.scss";

interface State {}
export const SearchBox: React.FC = () => {
  const [state, setState] = React.useState<State>({});

  const linked = () => {
    return (
      <Link href="/search/[query]" as={`/search/${state}`}>
        <button>Search</button>
      </Link>
    );
  };

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

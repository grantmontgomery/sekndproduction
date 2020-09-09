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

interface SearchQuery {
  searchType: string;
  eventsCategory: string;
  radius: string;
  startTime: number;
  endTime: number;
  placeType: string;
  endDate: string;
  startDate: string;
  startFormatted: string;
  endFormatted: string;
  unixStartDate: string;
  unixEndDate: string;
  ticketMasterCategories: string;
  yelpCategories: string;
}

export const SearchBox: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState<SearchQuery>({
    searchType: "ALL",
    eventsCategory: "",
    radius: "",
    startTime: 0,
    endTime: 0,
    endDate: "",
    startDate: "",
    placeType: "",
    startFormatted: "",
    endFormatted: "",
    unixStartDate: "",
    unixEndDate: "",
    ticketMasterCategories: "",
    yelpCategories: "",
  });

  const setDynamicPage: () => string = () => {
    return "";
  };

  const linked = () => {
    return (
      <Link
        href="/search/[query]"
        as={`/search/${searchQuery.searchType}+${setDynamicPage()}`}
      >
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

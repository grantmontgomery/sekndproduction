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

export type InputChange = (key: string, input: string) => void;

export default interface InputProps {
  handleInputChange: InputChange;
  placeType: string;
  radius: string;
  eventsCategory: string;
  where: string;
  startDate: string;
  endDate: string;
}

interface SearchQuery {
  searchType: string;
  eventsCategory: string;
  radius: string;
  where: string;
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
    where: "",
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

  const handleInputChange: InputChange = (key, input) => {
    return setSearchQuery((state) => ({
      ...state,
      [key]: input,
    }));
  };

  return (
    <div className={css.searchBox}>
      <SearchSelector></SearchSelector>
      <WhereInput
        handleInputChange={handleInputChange}
        where={searchQuery.where}
        radius={searchQuery.radius}
      ></WhereInput>
      <WhenInput
        handleInputChange={handleInputChange}
        startDate={searchQuery.startDate}
        endDate={searchQuery.endDate}
      ></WhenInput>
      <EventsInput
        handleInputChange={handleInputChange}
        eventsCategory={searchQuery.eventsCategory}
      ></EventsInput>
      <PlacesInput
        handleInputChange={handleInputChange}
        placeType={searchQuery.placeType}
      ></PlacesInput>
      <button className={css.searchButton}>Search</button>
    </div>
  );
};

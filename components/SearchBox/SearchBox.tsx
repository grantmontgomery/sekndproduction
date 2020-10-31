import * as React from "react";
import {
  SearchSelector,
  WhereInput,
  WhenInput,
  EventsInput,
  PlacesInput,
} from "./Parts";
import GridClass from "./Logic/GridClass";
import Cookie from "js-cookie";
import Link from "next/link";
import { usePartsDispatch } from "../../state/DatePartsContext";
import { useGridDispatch } from "../../state/SearchGridContext";
import { useRectanglesDispatch } from "../../state/GridRectanglesContext";
import css from "./SearchBox.module.scss";

export type InputChange = (key: string, input: string | Date) => void;

export default interface InputProps {
  handleInputChange: InputChange;
  searchType: string;
  placeType: string;
  radius: string;
  eventsCategory: string;
  location: string;
  startDate: Date;
  endDate: Date;
  handleQueryDate: (key: string, date: Date) => void;
}

export interface SearchQuery {
  searchType: string;
  eventsCategory: string;
  radius: string;
  location: string;
  placeType: string;
  endDate: Date;
  startDate: Date;
  startFormatted: string;
  endFormatted: string;
  unixStartDate: number;
  unixEndDate: number;
  ticketMasterCategories: string;
  yelpCategories: string;
}

export const SearchBox: React.FC = (props) => {
  const [searchQuery, setSearchQuery] = React.useState<SearchQuery>({
    searchType: "ALL",
    eventsCategory: "",
    radius: "",
    location: "",
    endDate: null,
    startDate: null,
    placeType: "",
    startFormatted: "",
    endFormatted: "",
    unixStartDate: null,
    unixEndDate: null,
    ticketMasterCategories: "",
    yelpCategories: "",
  });

  const rectanglesDispatch = useRectanglesDispatch();
  const gridDispatch = useGridDispatch();
  const partsDispatch = usePartsDispatch();

  const handleSubmit: () => void = () => {
    const newDatesInput: GridClass = new GridClass(
      searchQuery.unixStartDate,
      searchQuery.unixEndDate
    );

    newDatesInput.setGrid();
    partsDispatch({ type: "CLEAR_PARTS" });
    rectanglesDispatch({
      type: "ADD_RECTANGLES",
      payload: { numberOfRectangles: newDatesInput.numberofRectangles },
    });
    gridDispatch({
      type: "ADD_GRID_TEMPLATE",
      payload: {
        startDate: searchQuery.startDate,
        endDate: searchQuery.endDate,
        hourStrings: newDatesInput.hourStrings,
        hourStringsTrue: newDatesInput.hourStringsTrue,
        gridTemplate: newDatesInput.templateAreas,
      },
    });

    const {
      location,
      radius,
      placeType,
      startFormatted,
      endFormatted,
      unixStartDate,
      unixEndDate,
      eventsCategory,
      searchType,
    } = searchQuery;
    console.log(searchType);
    switch (searchType) {
      case "ALL":
        Cookie.set(
          "link",
          `/search/searchType=${searchType}+location=${location}+radius=${radius}+placeType=${placeType}+startFormatted=${startFormatted}+endFormatted=${endFormatted}+unixStartDate=${unixStartDate}+unixEndDate=${unixEndDate}+eventsCategory=${eventsCategory}`
        );
      case "PLACES":
        Cookie.set(
          "link",
          `/search/searchType=${searchType}+location=${location}+radius=${radius}+placeType=${placeType}+startFormatted=${startFormatted}+endFormatted=${endFormatted}`
        );
      case "EVENTS":
        Cookie.set(
          "link",
          `/search/searchType=${searchType}+location=${location}+radius=${radius}+startFormatted=${startFormatted}+endFormatted=${endFormatted}+unixStartDate=${unixStartDate}+unixEndDate=${unixEndDate}+eventsCategory=${eventsCategory}`
        );
    }
  };

  const checkFieldsDisplayLink: (searchType: string) => JSX.Element = (
    searchType
  ) => {
    const {
      location,
      radius,
      placeType,
      startFormatted,
      endFormatted,
      unixStartDate,
      unixEndDate,
      eventsCategory,
    } = searchQuery;
    switch (searchType) {
      case "ALL":
        return searchQuery.location !== "" &&
          searchQuery.startDate !== null &&
          searchQuery.radius !== "" &&
          searchQuery.endDate !== null &&
          searchQuery.placeType !== "" ? (
          <Link
            href={{
              pathname: "/search/[queried]",
              query: {
                searchType,
                location,
                radius,
                placeType,
                startFormatted,
                endFormatted,
                unixEndDate,
                unixStartDate,
                eventsCategory,
              },
            }}
            as={`/search/searchType=ALL+location=${searchQuery.location}+radius=${searchQuery.radius}+placeType=${searchQuery.placeType}+startFormatted=${searchQuery.startFormatted}+endFormatted=${searchQuery.endFormatted}+unixStartDate=${searchQuery.unixStartDate}+unixEndDate=${searchQuery.unixEndDate}+eventsCategory=${searchQuery.eventsCategory}`}
          >
            <button
              className={css.searchButton}
              style={{
                background: "linear-gradient(to right, #00C9FF,#92FE9D)",
              }}
              onClick={handleSubmit}
            >
              Search
            </button>
          </Link>
        ) : (
          <button
            className={css.searchButton}
            onClick={() => alert("please fill out missing fields")}
          >
            Search
          </button>
        );

      case "PLACES":
        return searchQuery.location !== "" &&
          searchQuery.startDate !== null &&
          searchQuery.radius !== "" &&
          searchQuery.endDate !== null &&
          searchQuery.placeType !== "" ? (
          <Link
            href={{
              pathname: "/search/[queried]",
              query: {
                searchType,
                location,
                radius,
                placeType,
                startFormatted,
                endFormatted,
              },
            }}
            as={`/search/searchType=PLACES+location=${searchQuery.location}+radius=${searchQuery.radius}+placeType=${searchQuery.placeType}+startFormatted=${searchQuery.startFormatted}+endFormatted=${searchQuery.endFormatted}`}
          >
            <button
              className={css.searchButton}
              onClick={handleSubmit}
              style={{
                background: "linear-gradient(to right, #00C9FF,#92FE9D)",
              }}
            >
              Search
            </button>
          </Link>
        ) : (
          <button
            className={css.searchButton}
            onClick={() => alert("please fill out missing fields")}
          >
            Search
          </button>
        );

      case "EVENTS":
        return searchQuery.location !== "" &&
          searchQuery.startDate !== null &&
          searchQuery.radius !== "" &&
          searchQuery.endDate !== null ? (
          <Link
            href={{
              pathname: "/search/[queried]",
              query: {
                searchType,
                location,
                radius,
                startFormatted,
                endFormatted,
                unixStartDate,
                unixEndDate,
                eventsCategory,
              },
            }}
            as={`/search/searchType=EVENTS+location=${searchQuery.location}+radius=${searchQuery.radius}+startFormatted=${searchQuery.startFormatted}+endFormatted=${searchQuery.endFormatted}+unixStartDate=${searchQuery.unixStartDate}+unixEndDate=${searchQuery.unixEndDate}+eventsCategory=${searchQuery.eventsCategory}`}
          >
            <button
              className={css.searchButton}
              style={{
                background: "linear-gradient(to right, #00C9FF,#92FE9D)",
              }}
              onClick={handleSubmit}
            >
              Search
            </button>
          </Link>
        ) : (
          <button
            className={css.searchButton}
            onClick={() => alert("please fill out missing fields")}
          >
            Search
          </button>
        );

      default:
        return searchQuery.location !== "" &&
          searchQuery.startDate !== null &&
          searchQuery.radius !== "" &&
          searchQuery.endDate !== null &&
          searchQuery.placeType !== "" ? (
          <Link
            href={{
              pathname: "/search/[queried]",
              query: {
                searchType,
                location,
                radius,
                placeType,
                startFormatted,
                endFormatted,
                unixEndDate,
                unixStartDate,
                eventsCategory,
              },
            }}
            as={`/search/searchType=ALL+location=${searchQuery.location}+radius=${searchQuery.radius}+placeType=${searchQuery.placeType}+startFormatted=${searchQuery.startFormatted}+endFormatted=${searchQuery.endFormatted}+unixStartDate=${searchQuery.unixStartDate}+unixEndDate=${searchQuery.unixEndDate}+eventsCategory=${searchQuery.eventsCategory}`}
          >
            <button
              className={css.searchButton}
              style={{
                background: "linear-gradient(to right, #00C9FF,#92FE9D)",
              }}
              onClick={handleSubmit}
            >
              Search
            </button>
          </Link>
        ) : (
          <button
            className={css.searchButton}
            onClick={() => alert("please fill out missing fields")}
          >
            Search
          </button>
        );
    }
  };

  const handleInputChange: InputChange = (key, input) => {
    return setSearchQuery((state) => ({
      ...state,
      [key]: input,
    }));
  };

  const handleQueryDate: (key: string, date: Date) => void = (key, date) => {
    if (key === "startDate") {
      const unixStartDate: number = Math.round(new Date(date).getTime() / 1000);
      const timeOffSet: number = date.getTimezoneOffset() * 60;
      const localStartTimeISO: string = new Date(
        (unixStartDate - timeOffSet) * 1000
      ).toISOString();
      const localStartTimeISOFormatted: string = `${localStartTimeISO.substring(
        0,
        19
      )}Z`;

      return setSearchQuery((state) => ({
        ...state,
        [key]: date,
        unixStartDate,
        startFormatted: localStartTimeISOFormatted,
      }));
    } else {
      const unixEndDate: number = Math.round(new Date(date).getTime() / 1000);
      const timeOffSet: number = date.getTimezoneOffset() * 60;
      const localEndTimeISO: string = new Date(
        (unixEndDate - timeOffSet) * 1000
      ).toISOString();
      const localEndTimeISOFormatted: string = `${localEndTimeISO.substring(
        0,
        19
      )}Z`;
      return setSearchQuery((state) => ({
        ...state,
        [key]: date,
        unixEndDate,
        endFormatted: localEndTimeISOFormatted,
      }));
    }
  };

  return (
    <div className={css.searchBox}>
      <SearchSelector
        searchType={searchQuery.searchType}
        handleInputChange={handleInputChange}
      ></SearchSelector>
      <WhereInput
        handleInputChange={handleInputChange}
        location={searchQuery.location}
        radius={searchQuery.radius}
      ></WhereInput>
      <WhenInput
        handleQueryDate={handleQueryDate}
        startDate={searchQuery.startDate}
        endDate={searchQuery.endDate}
      ></WhenInput>
      {searchQuery.searchType !== "PLACES" ? (
        <EventsInput
          handleInputChange={handleInputChange}
          eventsCategory={searchQuery.eventsCategory}
        ></EventsInput>
      ) : null}
      {searchQuery.searchType !== "EVENTS" ? (
        <PlacesInput
          handleInputChange={handleInputChange}
          placeType={searchQuery.placeType}
        ></PlacesInput>
      ) : null}

      {checkFieldsDisplayLink(searchQuery.searchType)}
    </div>
  );
};

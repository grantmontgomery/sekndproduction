import * as React from "react";
import {
  SearchSelector,
  WhereInput,
  WhenInput,
  EventsInput,
  PlacesInput,
} from "./Parts";
import Link from "next/link";
import {
  yelpEventsCall,
  yelpBusinessesCall,
  ticketmasterCall,
} from "./APICalls";
import css from "./SearchBox.module.scss";

export type InputChange = (key: string, input: string | Date) => void;

export default interface InputProps {
  handleInputChange: InputChange;
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
  startTime: number;
  endTime: number;
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
    startTime: 0,
    location: "",
    endTime: 0,
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

  console.log(props);

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
      <SearchSelector></SearchSelector>
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
      <EventsInput
        handleInputChange={handleInputChange}
        eventsCategory={searchQuery.eventsCategory}
      ></EventsInput>
      <PlacesInput
        handleInputChange={handleInputChange}
        placeType={searchQuery.placeType}
      ></PlacesInput>
      <button
        className={css.searchButton}
        onClick={() => (
          yelpEventsCall(searchQuery),
          yelpBusinessesCall(searchQuery),
          ticketmasterCall(searchQuery)
        )}
      >
        Search
      </button>
    </div>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("/api/ticketMasterAPI");
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

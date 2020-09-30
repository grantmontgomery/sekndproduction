import * as React from "react";
import { Layout, ResultCard } from "../../components";
import {
  yelpBusinessesCall,
  yelpEventsCall,
  ticketMasterCall,
} from "../../apicalls";
import { NextRouter, useRouter } from "next/router";
import useSWR, { responseInterface } from "swr";
import css from "../../styles/Queried.module.scss";
import { ParsedUrlQuery } from "querystring";
import { SearchBox } from "../../components/SearchBox";

type Results = {
  items: { [key: string]: any }[];
  errors: {
    yelpPlacesError?: string | undefined;
    yelpEventsError?: string | undefined;
    ticketmasterError?: string | undefined;
  };
};

type APIResponse = { [key: string]: any }[];

type SearchParams = { [key: string]: any };

export default function Queried(): JSX.Element {
  const [state, setState] = React.useState<{ resultsType: string }>({
    resultsType: "",
  });

  const router: NextRouter = useRouter();

  const urlStart: string =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://sekndapp.com";

  const setSearchParameters: () => { [key: string]: any } | null = () => {
    const { query } = router;
    if (!query.queried) return null;
    if (query.searchType) return query;

    const checkURLIsString: string = query.queried.toString();
    const paramValueArray: string[] = checkURLIsString.split("+");

    const SearchParams: SearchParams = {};

    paramValueArray.forEach((param) => {
      const indexOfEqual: number = param.search("=");
      if (indexOfEqual === -1) return;
      else {
        const paramKey: string = param.substring(0, indexOfEqual);
        const paramValue: string = param.substring(indexOfEqual + 1);
        SearchParams[paramKey] = paramValue;
      }
    });
    return SearchParams;
  };

  if (setSearchParameters() === null) {
    return <Layout></Layout>;
  } else {
    const {
      data: yelpPlaces,
      error: yelpPlacesError,
      isValidating: yelpPlacesLoading,
    }: responseInterface<APIResponse, string> = useSWR(
      setSearchParameters().searchType !== "EVENTS"
        ? `${urlStart}/api/yelpBusinessesAPI`
        : null,
      async (url) => {
        const { location, radius, placeType } = setSearchParameters();
        try {
          const response: Response = await fetch(url, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              location,
              radius: parseInt(radius),
              term: placeType,
            }),
          });

          const responseJSON = await response.json();

          const {
            businesses,
          }: { businesses: { [key: string]: any }[] } = responseJSON;
          businesses.forEach(
            (business) => (
              (business["type"] = "place"),
              (business["source"] = "yelp"),
              (business["inParts"] = false)
            )
          );

          return businesses;
        } catch (err) {
          return err.message;
        }
      }
    );

    const {
      data: yelpEvents,
      error: yelpEventsError,
      isValidating: yelpEventsLoading,
    }: responseInterface<APIResponse, string> = useSWR(
      setSearchParameters().searchType !== "PLACES"
        ? `${urlStart}/api/yelpEventsAPI`
        : null,
      async (url) => {
        const {
          location,
          radius,
          unixStartDate,
          unixEndDate,
        } = setSearchParameters();
        try {
          const response: Response = await fetch(url, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              location,
              radius: parseInt(radius),
              start_date: parseInt(unixStartDate),
              end_date: parseInt(unixEndDate),
            }),
          });

          const responseJSON = await response.json();

          const { events }: { events: { [key: string]: any }[] } = responseJSON;
          events.forEach(
            (event) => (
              (event["type"] = "event"),
              (event["source"] = "yelp"),
              (event["inParts"] = false)
            )
          );
          return events;
        } catch (err) {
          return err.message;
        }
      }
    );

    const {
      data: ticketmaster,
      error: ticketmasterError,
      isValidating: ticketmasterLoading,
    }: responseInterface<APIResponse, string> = useSWR(
      setSearchParameters().searchType !== "PLACES"
        ? `${urlStart}/api/ticketmasterAPI`
        : null,
      async (url) => {
        const {
          location,
          radius,
          startFormatted,
          endFormatted,
        } = setSearchParameters();
        try {
          const response: Response = await fetch(url, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              location,
              radius: Math.floor(parseInt(radius) * 0.001).toString(),
              startDateTime: startFormatted,
              endDateTime: endFormatted,
            }),
          });

          const responseJSON = await response.json();
          const {
            _embedded: { events },
          }: { _embedded: { events: { [key: string]: any }[] } } = responseJSON;

          events.forEach(
            (event) => (
              (event["source"] = "ticketmaster"),
              (event["type"] = "event"),
              (event["inParts"] = false)
            )
          );

          return events;
        } catch (err) {
          return err.message;
        }
      }
    );

    switch (setSearchParameters().searchType) {
      case "ALL":
        if (yelpPlacesLoading || yelpEventsLoading || ticketmasterLoading) {
          return <Layout></Layout>;
        } else {
          const results: Results = {
            items: [...yelpPlaces, ...yelpEvents, ...ticketmaster],
            errors: {
              yelpPlacesError,
              yelpEventsError,
              ticketmasterError,
            },
          };
          console.log(results);
          return <Layout></Layout>;
        }
      case "PLACES":
        if (yelpPlacesLoading) {
          return <Layout></Layout>;
        } else {
          const results: Results = {
            items: [...yelpPlaces, ...yelpEvents, ...ticketmaster],
            errors: {
              yelpPlacesError,
              yelpEventsError,
              ticketmasterError,
            },
          };
          return <Layout></Layout>;
        }
      case "EVENTS":
        if (ticketmasterLoading || yelpEventsLoading) {
          return <Layout></Layout>;
        } else {
          const results: Results = {
            items: [...yelpEvents, ticketmaster],
            errors: {
              yelpEventsError,
              ticketmasterError,
            },
          };
        }

      default:
        if (yelpPlacesLoading || yelpEventsLoading || ticketmasterLoading) {
          return <Layout></Layout>;
        } else {
          const results: Results = {
            items: [...yelpPlaces, ...yelpEvents, ...ticketmaster],
            errors: {
              yelpPlacesError,
              yelpEventsError,
              ticketmasterError,
            },
          };
          console.log(results);

          return <Layout></Layout>;
        }
    }
  }
}

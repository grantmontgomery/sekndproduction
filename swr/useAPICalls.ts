import useSWR, { responseInterface } from "swr";
import { inputEventCategories } from "../logic";

type APIResponse = { results: { [key: string]: any }[]; total: number };

type Results = {
  items: { [key: string]: any }[] | null;
  yelpPlacesTotal: number;
  yelpEventsTotal: number;
  ticketmasterTotal: number;
  loading: boolean;
  errors: {
    yelpPlacesError?: string | undefined;
    yelpEventsError?: string | undefined;
    ticketmasterError?: string | undefined;
  };
};

export default function useAPICalls(
  setSearchParameters: { [key: string]: any } | null,
  urlStart: string
): Results {
  const {
    data: yelpPlaces,
    error: yelpPlacesError,
    isValidating: yelpPlacesLoading,
  }: responseInterface<APIResponse, string> = useSWR(
    setSearchParameters && setSearchParameters.searchType !== "EVENTS"
      ? `${urlStart}/api/yelpBusinessesAPI`
      : null,

    async (url) => {
      const { location, radius, placeType } = setSearchParameters;

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
          total,
        }: {
          businesses: { [key: string]: any }[];
          total: number;
        } = responseJSON;
        businesses.forEach(
          (business) => (
            (business["type"] = "place"),
            (business["source"] = "yelp"),
            (business["inParts"] = false)
          )
        );

        return { results: businesses, total };
      } catch (err) {
        return err.message;
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const {
    data: yelpEvents,
    error: yelpEventsError,
    isValidating: yelpEventsLoading,
  }: responseInterface<APIResponse, string> = useSWR(
    setSearchParameters && setSearchParameters.searchType !== "PLACES"
      ? `${urlStart}/api/yelpEventsAPI`
      : null,
    async (url) => {
      const {
        location,
        radius,
        unixStartDate,
        unixEndDate,
        eventsCategory,
      } = setSearchParameters;
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
            ...inputEventCategories(eventsCategory, "yelp"),
          }),
        });

        const responseJSON = await response.json();

        const {
          events,
          total,
        }: { events: { [key: string]: any }[]; total: number } = responseJSON;
        events.forEach(
          (event) => (
            (event["type"] = "event"),
            (event["source"] = "yelp"),
            (event["inParts"] = false)
          )
        );
        return { results: events, total };
      } catch (err) {
        return err.message;
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const {
    data: ticketmaster,
    error: ticketmasterError,
    isValidating: ticketmasterLoading,
  }: responseInterface<APIResponse, string> = useSWR(
    setSearchParameters && setSearchParameters.searchType !== "PLACES"
      ? `${urlStart}/api/ticketmasterAPI`
      : null,
    async (url) => {
      const {
        location,
        radius,
        startFormatted,
        endFormatted,
        eventsCategory,
      } = setSearchParameters;
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
            ...inputEventCategories(eventsCategory, "ticketmaster"),
          }),
        });

        const responseJSON = await response.json();
        const {
          _embedded: { events },
          page: { totalElements, totalPages },
        }: {
          _embedded: { events: { [key: string]: any }[] };
          page: { [key: string]: number };
        } = responseJSON;

        events.forEach(
          (event) => (
            (event["source"] = "ticketmaster"),
            (event["type"] = "event"),
            (event["inParts"] = false)
          )
        );

        return { results: events, total: totalElements };
      } catch (err) {
        return err.message;
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const checkYelpPlacesArray: Results["items"] | [] = Array.isArray(
    yelpPlaces.results
  )
    ? yelpPlaces.results
    : [];
  const checkYelpEventsArray: Results["items"] | [] = Array.isArray(
    yelpEvents.results
  )
    ? yelpEvents.results
    : [];
  const checkTicketMasterArray: Results["items"] | [] = Array.isArray(
    ticketmaster.results
  )
    ? ticketmaster.results
    : [];

  return {
    items: [
      ...checkTicketMasterArray,
      ...checkYelpEventsArray,
      ...checkYelpPlacesArray,
    ],
    yelpPlacesTotal: yelpPlaces.total,
    yelpEventsTotal: yelpEvents.total,
    ticketmasterTotal: ticketmaster.total,
    loading: ticketmasterLoading || yelpEventsLoading || yelpPlacesLoading,
    errors: { yelpEventsError, yelpPlacesError, ticketmasterError },
  };
}

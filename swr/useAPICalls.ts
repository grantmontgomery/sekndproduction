import useSWR, { responseInterface } from "swr";
import { inputEventCategories } from "../logic";

type APIResponse = { [key: string]: any }[];

type Results = {
  items: { [key: string]: any }[] | null;
  errors: {
    yelpPlacesError?: string | undefined;
    yelpEventsError?: string | undefined;
    ticketmasterError?: string | undefined;
  };
};

export default function useAPICalls(
  setSearchParameters: { [key: string]: any } | null,
  urlStart: string
): {
  items: APIResponse;
  loading: boolean;
  errors: {
    yelpPlacesError: string;
    yelpEventsError: string;
    ticketmasterError: string;
  };
} {
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
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const checkYelpPlacesArray: Results["items"] | [] = Array.isArray(yelpPlaces)
    ? yelpPlaces
    : [];
  const checkYelpEventsArray: Results["items"] | [] = Array.isArray(yelpEvents)
    ? yelpEvents
    : [];
  const checkTicketMasterArray: Results["items"] | [] = Array.isArray(
    ticketmaster
  )
    ? ticketmaster
    : [];

  return {
    items: [
      ...checkTicketMasterArray,
      ...checkYelpEventsArray,
      ...checkYelpPlacesArray,
    ],
    loading: ticketmasterLoading || yelpEventsLoading || yelpPlacesLoading,
    errors: { yelpEventsError, yelpPlacesError, ticketmasterError },
  };
}

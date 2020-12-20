import * as React from "react";

import { inputEventCategories } from "../../../logic";

const url: "http://localhost:3000" | "https://sekndapp.com" =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://sekndapp.com";

export const useYelpEventsCall: () => any = async () => {
  const [yelpEventsLoading, setLoading] = React.useState<boolean>(false);
  const triggerYelpEventsCall: (searchParams: {
    [key: string]: any;
  }) => Promise<{ [key: string]: any }[] | string> = async (searchParams) => {
    setLoading(true);
    try {
      const {
        location,
        radius,
        unixStartDate,
        unixEndDate,
        eventsCategory,
        offset,
      } = searchParams;
      const response: Response = await fetch(`${url}/api/yelpEventsAPI`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          location,
          radius,
          start_date: parseInt(unixStartDate),
          end_date: parseInt(unixEndDate),
          offset: offset ? 1 + offset * 20 : null,
          ...inputEventCategories(eventsCategory, "yelp"),
        }),
      });

      const responseJSON = await response.json();

      const {
        _embedded: { events },
      }: {
        _embedded: { events: { [key: string]: any }[] };
      } = responseJSON;

      events.forEach(
        (event) => (
          (event["source"] = "ticketmaster"),
          (event["type"] = "event"),
          (event["inParts"] = false)
        )
      );

      setLoading(false);
      return events;
    } catch (error) {
      setLoading(false);
      return error.message;
    }
  };
  return { yelpEventsLoading, triggerYelpEventsCall };
};

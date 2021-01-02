import * as React from "react";

import { inputEventCategories } from "../../../logic";
const url: "http://localhost:3000" | "https://sekndapp.com" =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://sekndapp.com";

export const useTicketMasterCall: () => any = async () => {
  const [ticketmasterLoading, setLoading] = React.useState<boolean>(false);
  const triggerTicketMasterCall: (searchParams: {
    [key: string]: any;
  }) => Promise<
    { results: { [key: string]: any }[]; total: number } | string
  > = async (searchParams) => {
    setLoading(true);
    try {
      const {
        location,
        radius,
        startFormatted,
        endFormatted,
        eventsCategory,
        offset,
      } = searchParams;
      const response: Response = await fetch(`${url}/api/ticketmasterAPI`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          location,
          radius,
          startFormatted,
          endFormatted,
          eventsCategory,
          page: offset && `${offset}`,
          ...inputEventCategories(eventsCategory, "ticketmaster"),
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
      return { results: events, total: events.length };
    } catch (error) {
      setLoading(false);
      return error.message;
    }
  };
  return { ticketmasterLoading, triggerTicketMasterCall };
};

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
  }) => Promise<{ [key: string]: any }[] | string> = async (searchParams) => {
    setLoading(true);
    try {
      const {
        location,
        radius,
        startFormatted,
        endFormatted,
        eventsCategory,
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
      return events;
    } catch (error) {
      setLoading(false);
      return error.message;
    }
  };
  return { ticketmasterLoading, triggerTicketMasterCall };
};

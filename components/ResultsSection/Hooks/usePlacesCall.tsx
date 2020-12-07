import * as React from "react";
import useSWR, { responseInterface } from "swr";

const urlStart: string =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://sekndapp.com";

export const usePlacesCall: () => any = (searchParams) => {
  const triggerPlaceCall: (
    searchParams: { [key: string]: any } | null
  ) => void = () => {
    return;
  };

  const {
    data,
    error,
    isValidating,
  }: responseInterface<{ [key: string]: any }[], string> = useSWR(
    searchParams ? `${urlStart}/api/yelpBusinessesAPI` : null,
    async (url) => {
      try {
        const { location, radius, placeType, price } = searchParams;
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
            price,
          }),
        });
        return;
      } catch (err) {
        return err.message;
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
};

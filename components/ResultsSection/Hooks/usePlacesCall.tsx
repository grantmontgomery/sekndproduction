import * as React from "react";
import useSWR, { responseInterface } from "swr";

const urlStart: string =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://sekndapp.com";

export const usePlacesCall: (searchParams: {
  [key: string]: any;
}) => {
  checkedData: { [key: string]: any }[] | null;
  loading: boolean;
  error: string | null;
} = (searchParams) => {
  const {
    data,
    error,
    isValidating: loading,
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

  const checkedData: { [key: string]: any }[] | null = Array.isArray(data)
    ? data
    : [];

  return { checkedData, error, loading };
};

import * as React from "react";
import useSWR, { responseInterface } from "swr";

export const usePlacesCall: () => {
  placesLoading: boolean;
  triggerPlacesCall: (searchParams: {
    [key: string]: any;
  }) => Promise<{ results: { [key: string]: any }[]; total: number } | string>;
} = () => {
  const [placesLoading, setLoading] = React.useState<boolean>(false);

  const triggerPlacesCall: (searchParams: {
    [key: string]: any;
  }) => Promise<
    { results: { [key: string]: any }[]; total: number } | string
  > = async (searchParams) => {
    const urlStart: string =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://sekndapp.com";

    setLoading(true);
    try {
      const { location, radius, placeType, placesPrice, offset } = searchParams;
      const response: Response = await fetch(
        `${urlStart}/api/yelpBusinessesAPI`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            location,
            radius: parseInt(radius),
            term: placeType,
            price: placesPrice,
            offset: offset ? 1 + offset * 20 : null,
          }),
        }
      );
      const responseJSON = await response.json();

      const {
        businesses,
        total,
      }: { businesses: { [key: string]: any }[]; total: number } = responseJSON;
      businesses.forEach(
        (business) => (
          (business["type"] = "place"),
          (business["source"] = "yelp"),
          (business["inParts"] = false)
        )
      );

      setLoading(false);

      return { results: businesses, total };
    } catch (error) {
      setLoading(false);
      return error.message;
    }
  };

  return { placesLoading, triggerPlacesCall };
};

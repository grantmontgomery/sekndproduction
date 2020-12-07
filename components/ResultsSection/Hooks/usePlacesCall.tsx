import * as React from "react";
import useSWR, { responseInterface } from "swr";

export const usePlacesCall: () => {
  placesLoading: boolean;
  placesData: { [key: string]: any }[] | null;
  triggerPlacesCall: (searchParams: { [key: string]: any }) => Promise<void>;
} = () => {
  const [placesLoading, setLoading] = React.useState<boolean>(false);
  const [placesData, setData] = React.useState<{ [key: string]: any }[] | null>(
    null
  );
  const triggerPlacesCall: (searchParams: {
    [key: string]: any;
  }) => Promise<void> = async (searchParams) => {
    console.log(searchParams);
    const urlStart: string =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://sekndapp.com";

    setLoading(true);
    setData(null);
    try {
      const { location, radius, placeType, price, offset } = searchParams;
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
            price,
            offset,
          }),
        }
      );
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

      setLoading(false);

      setData(businesses);
    } catch (error) {
      setLoading(false);
      setData(null);
      return error.message;
    }
  };

  return { placesLoading, triggerPlacesCall, placesData };
};

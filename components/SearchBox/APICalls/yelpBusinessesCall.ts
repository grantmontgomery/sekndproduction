import { SearchQuery } from "../SearchBox";

type Params = Pick<SearchQuery, "location" | "radius" | "placeType">;

export const yelpBusinessesCall: ({
  location,
  radius,
  placeType,
}: Params) => Promise<any> = async ({ location, radius, placeType }) => {
  try {
    const response: Response = await fetch("/api/yelpBusinessesAPI", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        location,
        radius,
        term: placeType,
      }),
    });
    const responseJson: Promise<JSON> = response.json();
    console.log(responseJson);
  } catch (err) {
    console.log(err);
  }
};

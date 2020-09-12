import { SearchQuery } from "../SearchBox";

// type Params = Pick<SearchQuery, "location" | "radius" | "placeType">;

type Params = { [key: string]: string };

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
    const responseJson = await response.json();

    const backtoJson = JSON.parse(JSON.stringify(responseJson));

    const { businesses } = backtoJson;
    return {
      props: {
        businesses,
      },
    };
  } catch (err) {
    const response = { err };
    return {
      props: {
        businesses: { response },
      },
    };
  }
};

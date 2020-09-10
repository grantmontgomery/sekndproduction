import { SearchQuery } from "../SearchBox";

type Params = Pick<
  SearchQuery,
  "where" | "unixStartDate" | "unixEndDate" | "eventsCategory" | "radius"
>;

export const yelpEventsCall: ({
  where,
  unixStartDate,
  unixEndDate,
  eventsCategory,
  radius,
}: Params) => Promise<any> = async ({
  where,
  unixStartDate,
  unixEndDate,
  eventsCategory,
  radius,
}) => {
  try {
    const response: Response = await fetch("/api/yelpEvents", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        location: where,
        radiusInt: radius,
        start_date: unixStartDate,
        end_date: unixEndDate,
        categories: eventsCategory,
      }),
    });
    const responseJson: Promise<JSON> = response.json();
    console.log(responseJson);
  } catch (err) {
    console.log(err);
  }
};

import { SearchQuery } from "../SearchBox";

type Params = Pick<
  SearchQuery,
  "location" | "unixStartDate" | "unixEndDate" | "eventsCategory" | "radius"
>;

export const yelpEventsCall: ({
  where,
  unixStartDate,
  unixEndDate,
  eventsCategory,
  radius,
}: Params) => Promise<any> = async ({
  location,
  unixStartDate,
  unixEndDate,
  eventsCategory,
  radius,
}) => {
  try {
    const response: Response = await fetch("/api/yelpEventsAPI", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        location,
        radius,
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

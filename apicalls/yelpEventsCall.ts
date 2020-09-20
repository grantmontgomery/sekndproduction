import { parse } from "path";

type Params = { [key: string]: string };

export const yelpEventsCall: ({
  location,
  radius,
  unixStartDate,
  unixEndDate,
  categories,
}: Params) => Promise<any> = async ({
  location,
  radius,
  unixStartDate,
  unixEndDate,
  categories,
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
        radius: parseInt(radius),
        start_date: parseInt(unixStartDate),
        end_date: parseInt(unixEndDate),
      }),
    });
    const responseJson = await response.json();

    const { events }: { events: { [key: string]: any }[] } = responseJson;
    events.forEach(
      (event) => (
        (event["type"] = "event"),
        (event["source"] = "yelp"),
        (event["inParts"] = false)
      )
    );
    return events;
  } catch (err) {
    return err.message;
  }
};

import { SearchQuery } from "../SearchBox";

type Params = Pick<
  SearchQuery,
  "location" | "startFormatted" | "endFormatted" | "radius" | "eventsCategory"
>;

export const ticketmasterCall: ({
  location,
  radius,
  startFormatted,
  endFormatted,
  eventsCategory,
}: Params) => Promise<any> = async ({
  location,
  radius,
  startFormatted,
  endFormatted,
  eventsCategory,
}) => {
  try {
    const response: Response = await fetch("/api/ticketmasterAPI", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        location,
        radius: Math.floor(parseInt(radius) * 0.001).toString(),
        startDateTime: startFormatted,
        endDateTime: endFormatted,
        segmentId: eventsCategory,
      }),
    });
    const responseJson = await response.json();

    console.log(responseJson);
  } catch (err) {
    console.log(err);
  }
};

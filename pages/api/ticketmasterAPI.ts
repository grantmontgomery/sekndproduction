import { NextApiRequest, NextApiResponse } from "next";

type Params = {
  radius: string;
  startDateTime: string;
  endDateTime: string;
  unit: string[];
  apikey: string;
  segmentID?: string;
  city?: string;
  postalCode?: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
      const { startDateTime, endDateTime, radius, location } = req.body;
      const ticketmasterEvents: URL = new URL(
          "https://app.ticketmaster.com/discovery/v2/events"
        ),
        params: Params = {
          radius,
          startDateTime,
          endDateTime,
          unit: ["km"],
          apikey: `${process.env.TICKETMASTER_API_KEY}`,
        };
      Object.keys(params).forEach((key) =>
        ticketmasterEvents.searchParams.append(key, params[key])
      );

      isNaN(parseInt(location))
        ? ticketmasterEvents.searchParams.append("city", location)
        : ticketmasterEvents.searchParams.append("postalCode", location);

      const ticketmasterURLString: string = ticketmasterEvents.toString();
      //function

      const ticketmasterResponse: Response = await fetch(ticketmasterURLString);

      const jsonResponse: JSON = await ticketmasterResponse.json();

      return res.send(jsonResponse);
    }
    return res.status(200).end("Ticket MAster API");
  } catch (err) {
    return res.send(err);
  }
};

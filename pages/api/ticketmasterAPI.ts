import { NextApiRequest, NextApiResponse } from "next";

interface Params {
  radius: string;
  startDateTime: string;
  endDateTime: string;
  unit: string[];
  apikey: string;
  segmentID?: string;
  city?: string;
  postalCode?: string;
  size: string;
  page?: string;
}

// Amplify.configure({...config, ssr: true})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
      const {
        startDateTime,
        endDateTime,
        radius,
        location,
        segmentId,
        page,
      } = req.body;
      const ticketmasterEvents: URL = new URL(
          "https://app.ticketmaster.com/discovery/v2/events"
        ),
        params: Params = {
          radius,
          startDateTime,
          endDateTime,
          size: "20",
          unit: ["km"],
          apikey: `${process.env.TICKETMASTER_API_KEY}`,
        };
      Object.keys(params).forEach((key) => {
        ticketmasterEvents.searchParams.append(key, (params as any)[key]);
      });

      if (segmentId)
        ticketmasterEvents.searchParams.append("segmentId", segmentId);
      if (page) ticketmasterEvents.searchParams.append("page", page);

      ticketmasterEvents.searchParams.append(
        isNaN(parseInt(location)) ? "city" : "postalCode",
        location
      );

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

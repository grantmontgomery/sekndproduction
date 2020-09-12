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

export const ticketMasterCall = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== "GET") {
    //url setup

    const { startDateTime, endDateTime, radius, location } = req.body;
    const ticketmasterEvents: URL = new URL(
        "https://app.ticketmaster.com/discovery/v2/events"
      ),
      params: Params = {
        radius,
        startDateTime,
        endDateTime,
        unit: ["km"],
        apikey: process.env.TICKETMASTER_API_KEY,
      };
    Object.keys(params).forEach((key) =>
      ticketmasterEvents.searchParams.append(key, params[key])
    );

    if (isNaN(parseInt(location))) {
      ticketmasterEvents.searchParams.append("city", location);
    } else {
      ticketmasterEvents.searchParams.append("postalCode", location);
    }

    const ticketmasterUrlString: string = ticketmasterEvents.toString();

    //function
    const ticketmasterDataFetch: (urlString: string) => Promise<any> = async (
      urlString
    ) => {
      try {
        const ticketmasterResponse: Response = await fetch(urlString);
        const jsonResponse: JSON = await ticketmasterResponse.json();
        return jsonResponse;
      } catch (err) {
        return err;
      }
    };

    return ticketmasterDataFetch(ticketmasterUrlString)
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  }
  return res.status(200).end("Ticketmaster API");
};

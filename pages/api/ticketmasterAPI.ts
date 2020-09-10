import { NextApiRequest, NextApiResponse } from "next";

type Params = {
  radius: string;
  startDateTime: string;
  endDateTime: string;
  unit: string[];
  apikey: string;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    //url setup

    const { startDateTime, endDateTime, radius, location } = req.body;
    const ticketmasterEvents: URL = new URL(
        "https://api.yelp.com/v3/businesses/search"
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

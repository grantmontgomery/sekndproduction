import { NextApiRequest, NextApiResponse } from "next";

type Params = {
  location: string;
  radius: string;
  start_date: string;
  end_date: string;
  categories?: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
      const { location, radius, start_date, end_date, categories } = req.body;
      const yelpEvents: URL = new URL("https://api.yelp.com/v3/events/search"),
        params: Params = {
          location,
          radius,
          start_date,
          end_date,
        };
      Object.keys(params).forEach((key) =>
        yelpEvents.searchParams.append(key, params[key])
      );

      const yelpUrlString: string = yelpEvents.toString();

      //function

      const yelpResponse: Response = await fetch(yelpUrlString, {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      });
      const jsonResponse: JSON = await yelpResponse.json();
      return res.send(jsonResponse);
    }
    return res.status(200).end("Yelp Events API");
  } catch (err) {
    return res.send(err);
  }
};

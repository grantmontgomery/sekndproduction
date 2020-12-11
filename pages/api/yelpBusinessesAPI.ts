import { NextApiRequest, NextApiResponse } from "next";

type Params = {
  location: string;
  radius: number;
  term: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
      const { location, radius, term, price, offset } = req.body;
      const yelpBusinesses: URL = new URL(
          "https://api.yelp.com/v3/businesses/search"
        ),
        params: Params = {
          location,
          radius,
          term,
        };
      Object.keys(params).forEach((key) =>
        yelpBusinesses.searchParams.append(key, params[key])
      );

      if (price) yelpBusinesses.searchParams.append("price", price);
      if (offset) yelpBusinesses.searchParams.append("offset", offset);

      const yelpUrlString: string = yelpBusinesses.toString();

      //function

      const yelpResponse: Response = await fetch(yelpUrlString, {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      });
      const jsonResponse: JSON = await yelpResponse.json();
      return res.send(jsonResponse);
    }
    return res.status(200).end("Yelp Businesses API");
  } catch (err) {
    return res.send(err);
  }
};

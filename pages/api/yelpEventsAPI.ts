import { NextApiRequest, NextApiResponse } from "next";

type Params = {
  location: string;
  start_date: number;
  end_date: number;
  radius: string;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    //url setup
    const yelpEvents: URL = new URL("https://api.yelp.com/v3/events"),
      params: Params = {
        location: req.body.location,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        radius: req.body.radiusInt,
      };
    Object.keys(params).forEach((key) =>
      yelpEvents.searchParams.append(key, params[key])
    );
    if (req.body.categories) {
      yelpEvents.searchParams.append("categories", req.body.categories);
    }

    const yelpUrlString: string = yelpEvents.toString();

    //function
    const yelpdataFetch: (urlString: string) => Promise<any> = async (
      urlString
    ) => {
      try {
        const yelpResponse: Response = await fetch(urlString, {
          headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`,
          },
        });
        const jsonResponse: JSON = await yelpResponse.json();
        return jsonResponse;
      } catch (err) {
        return err;
      }
    };

    return yelpdataFetch(yelpUrlString)
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  }
  return res.status(200).end("Hello World");
};

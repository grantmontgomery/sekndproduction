import { NextApiRequest, NextApiResponse } from "next";

type Params = {
  location: string;
  term: string;
  radius: string;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    //url setup
    const yelpBusinesses: URL = new URL(
        "https://api.yelp.com/v3/businesses/search"
      ),
      params: Params = {
        location: req.body.location,
        radius: req.body.radius,
        term: req.body.term,
      };
    Object.keys(params).forEach((key) =>
      yelpBusinesses.searchParams.append(key, params[key])
    );

    const yelpUrlString: string = yelpBusinesses.toString();

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
  return res.status(200).end("YelpBusinesses API");
};

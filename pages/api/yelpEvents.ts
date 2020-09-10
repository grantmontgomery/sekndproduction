import { NextApiRequest, NextApiResponse } from "next";

type Params = {
  location: string;
  start_date: string;
  end_date: string;
  radius: number;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
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

    console.log(yelpEvents.toString());

    //   fetch(yelpEvents.toString(), {
    //     headers: {
    //       Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
    //     }
    //   })
    //     .then(res => res.json())
    //     .then(data => res.send(data))
    //     .catch(err => res.send(err.message));
    return res.status(200).end(req.body);
  }
  return res.status(200).end("Hello World");
};

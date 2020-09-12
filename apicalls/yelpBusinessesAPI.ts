type Query = {
  [key: string]: string;
};

export const yelpBusinessesAPI: ({
  location,
  radius,
  placeType,
}: Query) => Error | Promise<any> = async ({ location, radius, placeType }) => {
  try {
    const yelpBusinesses: URL = new URL(
        "https://api.yelp.com/v3/businesses/search"
      ),
      params = {
        location,
        radius,
        term: placeType,
      };
    Object.keys(params).forEach((key) =>
      yelpBusinesses.searchParams.append(key, params[key])
    );

    const yelpUrlString: string = yelpBusinesses.toString();

    //function

    const yelpResponse: Response = await fetch(yelpUrlString, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
    });
    const jsonResponse: JSON = await yelpResponse.json();
    return jsonResponse;
  } catch (err) {
    return { err };
  }
};

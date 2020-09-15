type Params = { [key: string]: string };

export const yelpBusinessesCall: ({
  location,
  radius,
  placeType,
}: Params) => Promise<any> = async ({ location, radius, placeType }) => {
  try {
    const response: Response = await fetch("/api/yelpBusinessesAPI", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        location,
        radius,
        term: placeType,
      }),
    });
    const responseJson = await response.json();

    const {
      businesses,
    }: { businesses: { [key: string]: any }[] } = responseJson;
    businesses.forEach(
      (business) => (
        (business["type"] = "place"),
        (business["source"] = "yelp"),
        (business["inParts"] = false)
      )
    );
    return businesses;
  } catch (err) {
    return err.message;
  }
};

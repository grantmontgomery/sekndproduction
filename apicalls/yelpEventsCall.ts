type Params = { [key: string]: string };

export const yelpBusinessesCall: ({
  location,
  radius,
  unixStartDate,
  unixEndDate,
  categories,
}: Params) => Promise<any> = async ({
  location,
  radius,
  unixStartDate,
  unixEndDate,
  categories,
}) => {
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
        start_date: unixStartDate,
        end_date: unixEndDate,
      }),
    });
    const responseJson = await response.json();

    const { events } = responseJson;
    return { events };
  } catch (err) {
    return { error: err.message };
  }
};

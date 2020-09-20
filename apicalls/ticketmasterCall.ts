type Params = {
  [key: string]: string;
};

export const ticketMasterCall: ({
  location,
  radius,
  startFormatted,
  endFormatted,
}: Params) => Promise<any> = async ({
  location,
  radius,
  startFormatted,
  endFormatted,
}) => {
  try {
    const response: Response = await fetch("/api/ticketmasterAPI", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        location,
        radius: Math.floor(parseInt(radius) * 0.001).toString(),
        startDateTime: startFormatted,
        endDateTime: endFormatted,
      }),
    });
    const responseJson = await response.json();
    const {
      _embedded: { events },
    }: { _embedded: { events: { [key: string]: any }[] } } = responseJson;

    return events;
  } catch (err) {
    return err.message;
  }
};

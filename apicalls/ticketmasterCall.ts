type Params = {
  [key: string]: string;
};

export const ticketMasterCall: ({
  location,
  radius,
  startFormmated,
  endFormatted,
}: Params) => Promise<any> = async ({
  location,
  radius,
  startFormmated,
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
        radius: Math.floor(parseInt(radius) * 0.001),
        startDatTime: startFormmated,
        endDateTime: endFormatted,
      }),
    });
    const responseJson = await response.json();
    const {
      _embedded: { events },
    } = responseJson;
    return { events };
  } catch (err) {
    return { error: err.message };
  }
};

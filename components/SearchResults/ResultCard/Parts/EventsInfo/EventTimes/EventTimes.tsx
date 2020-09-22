import * as React from "react";
import css from "./EventTimes.module.scss";

export const EventTimes: React.FC<{
  startTime: string;
  endTime: string | null;
  source: string;
}> = ({ startTime, endTime, source }) => {
  const parseYelpTimes: () => JSX.Element = () => {
    const yelpStartObject: Date = new Date(startTime);
    const yelpEndObject: Date = new Date(endTime);

    //yelp start time
    const yelpStartTime: string = yelpStartObject.toLocaleTimeString("en-US");
    const startAmPm: string = yelpStartTime.substring(yelpStartTime.length - 2);
    const startWithoutSeconds: string = yelpStartTime.substring(
      0,
      yelpStartTime.length - 6
    );

    const yelpStartFormattedTime: string = `${startWithoutSeconds} ${startAmPm}`;

    //yelp start date

    const yelpStartDate: string = yelpStartObject.toLocaleDateString();

    //yelp end time

    const yelpEndTime: string = yelpEndObject.toLocaleTimeString("en-US");
    const endAmPm: string = yelpEndTime.substring(yelpEndTime.length - 2);
    const endWithoutSeconds: string = yelpEndTime.substring(
      0,
      yelpEndTime.length - 6
    );

    const yelpEndFormattedTime: string = `${endWithoutSeconds} ${endAmPm}`;

    //yelp end Date

    const yelpEndDate: string = yelpEndObject.toLocaleDateString();

    return (
      <p>
        {`From: ${yelpStartDate} ${yelpStartFormattedTime}`}
        <br />
        {`To: ${yelpEndDate} ${yelpEndFormattedTime}`}
      </p>
    );
  };

  const parseTicketMasterTime: () => JSX.Element = () => {
    const ticketmasterStartObject: Date = new Date(startTime);

    const ticketmasterStartTime: string = ticketmasterStartObject.toLocaleTimeString(
      "en-US"
    );
    const startAmPm: string = ticketmasterStartTime.substring(
      ticketmasterStartTime.length - 2
    );
    const startWithoutSeconds: string = ticketmasterStartTime.substring(
      0,
      ticketmasterStartTime.length - 6
    );

    const ticketmasterStartFormattedTime: string = `${startWithoutSeconds} ${startAmPm}`;

    const ticketmasterDate: string = ticketmasterStartObject.toLocaleDateString();

    return <p>{`${ticketmasterDate} ${ticketmasterStartFormattedTime}`}</p>;
  };

  const determineSource: () => JSX.Element = () => {
    return source === "yelp" ? parseYelpTimes() : parseTicketMasterTime();
  };

  return <div className={css.times}>{determineSource()}</div>;
};

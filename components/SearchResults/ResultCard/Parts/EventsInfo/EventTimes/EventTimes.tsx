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
    const yelpStartTime: string = yelpStartObject.toLocaleTimeString();
    const startAmPm: string = yelpStartTime.substring(yelpStartTime.length - 2);
    const startWithoutSeconds: string = yelpStartTime.substring(
      0,
      yelpStartTime.length - 6
    );

    const yelpStartFormattedTime: string = `${startWithoutSeconds} ${startAmPm}`;

    //yelp start date

    const yelpStartDate: string = yelpStartObject.toLocaleDateString();

    //yelp end time

    const yelpEndTime: string = yelpEndObject.toLocaleTimeString();
    const endAmPm: string = yelpEndTime.substring(yelpEndTime.length - 2);
    const endWithoutSeconds: string = yelpEndTime.substring(
      0,
      yelpEndTime.length - 6
    );

    const yelpEndFormattedTime: string = `${endWithoutSeconds} ${endAmPm}`;

    //yelp end Date

    const yelpEndDate: string = yelpEndObject.toLocaleTimeString();

    return <span>{`${yelpStartDate} ${yelpStartFormattedTime}`}</span>;
  };

  const determineSource: () => JSX.Element = () => {
    return source === "yelp" ? parseYelpTimes() : null;
  };
  console.log(startTime);
  console.log(endTime);

  return (
    <div className={css.times}>
      <span>{determineSource()}</span>
      <span> 9/26/2020 8:30 PM</span>
    </div>
  );
};

import * as React from "react";
import css from "./EventTimes.module.scss";

export const EventTimes: React.FC<{
  startTime: string;
  endTime: string;
  source: string;
}> = ({ startTime, endTime }) => {
  return (
    <div className={css.times}>
      <span> 9/26/2020 6:30 PM </span>
      <span> 9/26/2020 8:30 PM</span>
    </div>
  );
};

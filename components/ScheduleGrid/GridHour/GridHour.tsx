import * as React from "react";
import css from "./GridHour.module.scss";

export const GridHour: React.FC<{ index: number; hourString: string }> = ({
  index,
  hourString,
}) => {
  return (
    <React.Fragment>
      <span style={{ gridArea: `hour${index}` }} className={css.hour}>
        {hourString}
      </span>
      <div
        style={{ gridArea: `hour${index}` }}
        className={css.hourMarker}
      ></div>
    </React.Fragment>
  );
};

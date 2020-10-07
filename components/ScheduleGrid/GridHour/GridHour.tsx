import * as React from "react";
import css from "./GridHour.module.scss";

export const GridHour: React.FC<{ index: number; hourString: string }> = ({
  index,
  hourString,
}) => {
  return (
    <span style={{ gridArea: `hour${index}` }} className={css.hour}>
      {hourString}
    </span>
  );
};

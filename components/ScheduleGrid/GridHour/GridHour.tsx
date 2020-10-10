import * as React from "react";
import css from "./GridHours.module.scss";

export const GridHour: React.FC<{ index: number; hourString: string }> = ({
  index,
  hourString,
}) => {
  return (
    <div style={{ gridArea: `hour${index}` }} className={css.hour}>
      <span>{hourString}</span>
    </div>
  );
};

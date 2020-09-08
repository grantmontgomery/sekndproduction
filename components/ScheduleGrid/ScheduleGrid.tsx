import * as React from "react";
import css from "./ScheduleGrid.module.scss";

export const ScheduleGrid: React.FC = () => {
  return (
    <div className={css.gridWrapper}>
      <div className={css.innerGrid}></div>
    </div>
  );
};

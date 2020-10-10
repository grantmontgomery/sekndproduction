import * as React from "react";
import { useRectanglesState } from "../../state/GridRectanglesContext";
import { useGridState } from "../../state/SearchGridContext";
import css from "./ScheduleGrid.module.scss";

export const ScheduleGrid: React.FC = () => {
  const { gridTemplate } = useGridState();
  return (
    <section className={css.gridWrapper}>
      <div
        style={{ gridTemplateAreas: gridTemplate }}
        className={css.innerGrid}
      ></div>
    </section>
  );
};

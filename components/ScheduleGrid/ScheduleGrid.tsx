import * as React from "react";
import { GridHour } from "./GridHour";
import { GridRectangle } from "./GridRectangle";
import { useRectanglesState } from "../../state/GridRectanglesContext";
import { useGridState } from "../../state/SearchGridContext";
import css from "./ScheduleGrid.module.scss";

export const ScheduleGrid: React.FC = () => {
  const { gridTemplate, hourStrings } = useGridState();
  const { rectangles } = useRectanglesState();

  console.log(rectangles);
  return (
    <section id="innerGrid" className={css.gridWrapper}>
      <div
        style={{ gridTemplateAreas: `${gridTemplate}` }}
        className={css.innerGrid}
      >
        {rectangles.map((rectangle, index) => (
          <GridRectangle
            rectangle={rectangle}
            key={`rectangle${index}`}
            index={index}
          ></GridRectangle>
        ))}
        {hourStrings.map((string, index) => (
          <GridHour key={`hour${index}`} index={index} hourString={string} />
        ))}
      </div>
    </section>
  );
};

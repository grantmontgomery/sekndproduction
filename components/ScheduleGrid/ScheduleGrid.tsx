import * as React from "react";
import { GridHour } from "./GridHour";
import { GridRectangle } from "./GridRectangle";
import { useTouchState } from "./Context";
import { useRectanglesState } from "../../state/GridRectanglesContext";
import { useGridState } from "../../state/SearchGridContext";
import css from "./ScheduleGrid.module.scss";

export const ScheduleGrid: React.FC = () => {
  // const [scroll, enableScroll] = React.useState<boolean>(false);
  const { gridTemplate, hourStrings } = useGridState();
  const { rectangles } = useRectanglesState();
  const { stopTouch } = useTouchState();
  console.log(rectangles);
  return (
    <section id="innerGrid" className={css.gridWrapper}>
      <div
        style={{
          gridTemplateAreas: `${gridTemplate}`,
        }}
        className={`${css.innerGrid} ${stopTouch ? css.stopTouch : null}`}
        // onTouchStart={() => enableScroll(true)}
        // onTouchEnd={() => enableScroll(false)}
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

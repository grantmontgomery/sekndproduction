import * as React from "react";
import { GridHour } from "./GridHour";
import { GridRectangle } from "./GridRectangle";
import { useTouchState, useTouchDispatch } from "./Context";
import {
  useRectanglesState,
  useRectanglesDispatch,
} from "../../state/GridRectanglesContext";
import { useGridState } from "../../state/SearchGridContext";
import css from "./ScheduleGrid.module.scss";

export const ScheduleGrid: React.FC = () => {
  const { gridTemplate, hourStrings } = useGridState();

  const { rectangles } = useRectanglesState();
  const rectangleDispatch = useRectanglesDispatch();
  const { stopTouchScroll, customPiece } = useTouchState();
  const touchDispatch = useTouchDispatch();

  React.useEffect(() => {
    console.log(rectangles);
    return () => {
      rectangles.forEach((rectangle, index) => {
        if (rectangle.part && !rectangle.part.name)
          console.log("removing part");
        rectangleDispatch({
          type: "REMOVE_PART_FROM_RECTANGLE",
          payload: { index },
        });
      });
      touchDispatch({ type: "REMOVE_CUSTOM_PIECE" });
    };
  }, []);
  return (
    <section
      id="innerGrid"
      className={css.gridWrapper}
      style={{ overflowY: stopTouchScroll ? "hidden" : "scroll" }}
    >
      <div
        style={{
          gridTemplateAreas: `${gridTemplate}`,
        }}
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

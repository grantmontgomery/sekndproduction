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
    return touchDispatch({ type: "REMOVE_CUSTOM_PIECE" });
  }, []);

  return (
    <section
      id="innerGrid"
      className={css.gridWrapper}
      style={{ overflowY: stopTouchScroll ? "hidden" : "scroll" }}
    >
      {rectangles.length > 0 ? (
        <div
          style={{
            gridTemplateAreas: `${gridTemplate}`,
          }}
          className={css.innerGrid}
        >
          {rectangles.map((rectangle: any, index: number) => (
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
      ) : (
        <h1 className={css.instructions}>Make a search to get started!</h1>
      )}
    </section>
  );
};

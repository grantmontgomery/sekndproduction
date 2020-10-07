import * as React from "react";
import { GridSquare } from "./GridSquare";
import { GridHour } from "./GridHour";
import { useSquaresState } from "../../state/GridSquaresContext";
import { useGridState } from "../../state/SearchGridContext";
import css from "./ScheduleGrid.module.scss";
import { spawn } from "child_process";

export const ScheduleGrid: React.FC = () => {
  const { squares } = useSquaresState();
  const { hourStrings, gridTemplate } = useGridState();
  console.log(gridTemplate);
  const columnString: string = "calc(40vh/6) ";
  return (
    <div className={css.gridWrapper}>
      <div
        style={{
          gridTemplateAreas: gridTemplate,
          gridTemplateColumns: `${columnString.repeat(
            squares.length / 5
          )}calc(40vh/6)`,
        }}
        className={css.innerGrid}
      >
        {hourStrings && hourStrings
          ? hourStrings.map((hour, index) => (
              <GridHour key={hour} index={index} hourString={hour}></GridHour>
            ))
          : null}
        {squares && squares.length > 0 ? (
          squares.map((square, index) => (
            <GridSquare
              key={`gridSquare${index}`}
              part={square.part}
            ></GridSquare>
          ))
        ) : (
          <h1>Make a search!</h1>
        )}
      </div>
    </div>
  );
};

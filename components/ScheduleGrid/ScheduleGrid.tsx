import * as React from "react";
import { GridSquare } from "./GridSquare";
import { useSquaresState } from "../../state/GridSquaresContext";
import { useGridState } from "../../state/SearchGridContext";
import css from "./ScheduleGrid.module.scss";
import { spawn } from "child_process";

export const ScheduleGrid: React.FC = () => {
  const { squares } = useSquaresState();
  const { hourStrings, gridTemplate } = useGridState();

  return (
    <div className={css.gridWrapper}>
      <div className={css.innerGrid}>
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

import * as React from "react";
import { RectanglesProvider } from "../../../state/GridRectanglesContext";
import { ScheduleDragPiece } from "../../ScheduleDragPiece";
import css from "./GridRectangle.module.scss";

export const GridRectangle: React.FC<{
  index: number;
  rectangle: { part: { [key: string]: any } | null };
}> = ({ index, rectangle }) => {
  return (
    <div style={{ gridArea: `rectangle${index}` }} className={css.rectangle}>
      {rectangle.part ? (
        <ScheduleDragPiece part={rectangle.part}></ScheduleDragPiece>
      ) : null}
    </div>
  );
};

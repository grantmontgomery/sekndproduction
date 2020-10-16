import * as React from "react";
import { useRectanglesDispatch } from "../../../state/GridRectanglesContext";
import { ScheduleDragPiece } from "../../ScheduleDragPiece";
import css from "./GridRectangle.module.scss";

export const GridRectangle: React.FC<{
  index: number;
  rectangle: { part: boolean };
}> = ({ index, rectangle }) => {
  return (
    <div
      style={{ gridArea: `rectangle${index}` }}
      className={css.rectangle}
    ></div>
  );
};

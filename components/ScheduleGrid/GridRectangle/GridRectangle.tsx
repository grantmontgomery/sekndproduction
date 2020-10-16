import * as React from "react";
import { useRectanglesDispatch } from "../../../state/GridRectanglesContext";
import { ScheduleDragPiece } from "../../ScheduleDragPiece";
import css from "./GridRectangle.module.scss";

export const GridRectangle: React.FC<{
  index: number;
  rectangle: { part: { [key: string]: any } | null };
}> = ({ index, rectangle }) => {
  const [customPart, setPart] = React.useState<boolean>(false);

  return (
    <div
      style={{ gridArea: `rectangle${index}` }}
      onClick={() => (rectangle.part ? setPart(false) : setPart(true))}
      className={css.rectangle}
    >
      {rectangle.part || customPart ? (
        <ScheduleDragPiece
          part={
            rectangle.part !== null ? rectangle.part : { rectangleIndex: index }
          }
        ></ScheduleDragPiece>
      ) : null}
    </div>
  );
};

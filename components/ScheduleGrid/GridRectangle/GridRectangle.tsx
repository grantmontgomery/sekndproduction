import * as React from "react";
import { useRectanglesDispatch } from "../../../state/GridRectanglesContext";
import { useTouchDispatch, useTouchState } from "../Context";
import { ScheduleDragPiece } from "../../ScheduleDragPiece";
import css from "./GridRectangle.module.scss";

export const GridRectangle: React.FC<{
  index: number;
  rectangle: { part: { [key: string]: any } | null };
}> = ({ index, rectangle }) => {
  // const [customPart, setPart] = React.useState<boolean>(false);
  const { customPiece } = useTouchState();
  const touchDispatch = useTouchDispatch();
  const rectanglesDispatch = useRectanglesDispatch();

  const handleAdd: () => void = () => {
    if (!rectangle.part && !customPiece) {
      touchDispatch({ type: "CUSTOM_PIECE" });
      rectanglesDispatch({
        type: "ADD_PART_TO_RECTANGLE",
        payload: { index, part: { rectangleIndex: index } },
      });
    }
  };
  return (
    <div
      style={{ gridArea: `rectangle${index}` }}
      onClick={handleAdd}
      className={css.rectangle}
    >
      {rectangle.part ? (
        <ScheduleDragPiece
          part={
            rectangle.part !== null ? rectangle.part : { rectangleIndex: index }
          }
        ></ScheduleDragPiece>
      ) : null}
    </div>
  );
};

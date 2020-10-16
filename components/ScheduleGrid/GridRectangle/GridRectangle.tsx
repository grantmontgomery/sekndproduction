import * as React from "react";
import { useTouchDispatch, useTouchState } from "../Context";
import { ScheduleDragPiece } from "../../ScheduleDragPiece";
import css from "./GridRectangle.module.scss";

export const GridRectangle: React.FC<{
  index: number;
  rectangle: { part: boolean };
}> = ({ index, rectangle }) => {
  const touchDispatch = useTouchDispatch();
  const { customPiece } = useTouchState();
  return (
    <div
      style={{ gridArea: `rectangle${index}` }}
      className={css.rectangle}
      onClick={() =>
        customPiece
          ? null
          : touchDispatch({
              type: "SET_CUSTOM_PIECE",
              payload: {
                index,
              },
            })
      }
    ></div>
  );
};

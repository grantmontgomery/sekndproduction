import * as React from "react";
import { DragState } from "./DragPiece";
import css from "./DragPiece.module.scss";

export const DragPieceDisplay: React.FC<{
  handleMouseDown: any;
  styles: { [key: string]: string | number };
}> = ({ styles, handleMouseDown }) => {
  return (
    <div
      className={css.dragPiece}
      style={styles}
      onMouseDown={handleMouseDown}
      // onTouchStart={}
      // onTouchStart={handleMouseDown}
    ></div>
  );
};

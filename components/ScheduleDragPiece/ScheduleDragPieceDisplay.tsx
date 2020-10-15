import * as React from "react";
import css from "./ScheduleDragPiece.module.scss";

export const ScheduleDragPieceDisplay: React.FC<{
  translateY: number;
  isDragging: boolean;
  handleTouchStart: (any) => void;
  handleTouchEnd: () => void;
  height: string;
}> = ({ translateY, isDragging, handleTouchStart, height, handleTouchEnd }) => {
  return (
    <div
      className={css.dragWrapper}
      style={{
        height,
        width: isDragging ? "calc(100% + 2.5%)" : "100%",
        // marginRight: dragPosition.isDragging ? "5%" : null,
        position: isDragging ? "absolute" : "relative",
        transform: `translate(0, ${translateY}px)`,
        zIndex: isDragging ? 4 : null,
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className={css.extendHandle}></button>
      <div className={css.imageBackground}></div>
      <button className={css.extendHandle}></button>
    </div>
  );
};

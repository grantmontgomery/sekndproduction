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
        width: isDragging ? "77.5%" : "75%",
        transform: `translate(0, ${translateY}px)`,
        zIndex: isDragging ? 3 : null,
        right: isDragging ? "2.5%" : "0%",
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

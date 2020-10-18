import * as React from "react";
import css from "./ScheduleDragPiece.module.scss";

export const ScheduleDragPieceDisplay: React.FC<{
  translateY: number;
  isDragging: boolean;
  handleTouchStart: (any) => void;
  handleTouchEnd: (any) => void;
  heightChanging: boolean;
  height: string;
}> = ({
  translateY,
  isDragging,
  handleTouchStart,
  height,
  handleTouchEnd,
  heightChanging,
}) => {
  return (
    <div
      className={css.dragWrapper}
      style={{
        height,
        position: isDragging ? "absolute" : "relative",
        transform: `translate(0, ${isDragging ? translateY : 0}px)`,
        right: isDragging ? "2.5%" : "0",
        zIndex: isDragging ? 4 : null,
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className={css.extendHandle}
        onTouchStart={handleTouchStart}
      ></button>
      <div className={css.imageBackground}></div>
      <button className={css.extendHandle}></button>
    </div>
  );
};

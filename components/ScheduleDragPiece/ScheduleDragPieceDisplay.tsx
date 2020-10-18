import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";
import * as React from "react";
import css from "./ScheduleDragPiece.module.scss";

export const ScheduleDragPieceDisplay: React.FC<{
  translateY: number;
  isDragging: boolean;
  handleTouchStart: (any) => void;
  handleTouchEnd: (any) => void;
  heightChanging: boolean;
  heightDirection: string;
  pieceHeight: number;
}> = ({
  translateY,
  isDragging,
  handleTouchStart,
  handleTouchEnd,
  heightDirection,
  heightChanging,
  pieceHeight,
}) => {
  const calculateHeight: () => string = () => {
    if (heightChanging) {
      switch (heightDirection) {
        case "up":
          return translateY < 0
            ? `${pieceHeight * 10 - translateY * 0.12}vh`
            : `${pieceHeight * 10}vh`;

        case "down":
          return translateY > 0
            ? `${pieceHeight * 10 + translateY * 0.12}vh`
            : `${pieceHeight * 10}vh`;
        default:
          return `${pieceHeight * 10}vh`;
      }
    } else {
      return `${pieceHeight * 10}vh`;
    }
  };

  console.log(heightDirection);
  console.log(translateY);
  return (
    <div
      className={css.dragWrapper}
      style={{
        height: calculateHeight(),
        position: isDragging ? "absolute" : "relative",
        transform: `translate(0, ${isDragging ? translateY : 0}px)`,
        right: isDragging ? "2.5%" : "0",
        top:
          heightChanging && heightDirection === "up" && translateY < 0
            ? `${translateY * 0.12}vh`
            : "0",
        zIndex: isDragging ? 4 : null,
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        id="extendHandle1"
        className={css.extendHandle}
        onTouchStart={handleTouchStart}
      ></button>
      <div className={css.imageBackground}></div>
      <button
        id="extendHandle2"
        className={css.extendHandle}
        onTouchStart={handleTouchStart}
      ></button>
    </div>
  );
};

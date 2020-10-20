import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";
import * as React from "react";
import css from "./ScheduleDragPiece.module.scss";

export const ScheduleDragPieceDisplay: React.FC<{
  translateY: number;
  isDragging: boolean;
  handleTouchStart: (any) => void;
  handleTouchEnd: (any) => void;
  heightChanging: boolean;
  part: { [key: string]: any };
  heightDirection: string;
  pieceHeight: number;
}> = ({
  translateY,
  isDragging,
  handleTouchStart,
  handleTouchEnd,
  part,
  heightDirection,
  heightChanging,
  pieceHeight,
}) => {
  const calculateHeight: () => string = () => {
    if (heightChanging) {
      switch (heightDirection) {
        case "up":
          if (pieceHeight === 1) {
            return translateY < 0
              ? `calc(${pieceHeight * 10}vh - ${translateY}px)`
              : `${pieceHeight * 10}vh`;
          } else {
            return (pieceHeight * window.innerHeight) / 10 - translateY >=
              window.innerHeight / 10
              ? `calc(${pieceHeight * 10}vh - ${translateY}px)`
              : `10vh`;
          }
        case "down":
          if (pieceHeight === 1) {
            return translateY > 0
              ? `calc(${pieceHeight * 10}vh + ${translateY}px)`
              : `${pieceHeight * 10}vh`;
          } else {
            return (pieceHeight * window.innerHeight) / 10 + translateY >=
              window.innerHeight / 10
              ? `calc(${pieceHeight * 10}vh + ${translateY}px)`
              : `10vh`;
          }
        default:
          return `${pieceHeight * 10}vh`;
      }
    } else {
      return `${pieceHeight * 10}vh`;
    }
  };

  return (
    <div
      className={css.dragWrapper}
      style={{
        height: calculateHeight(),
        position: isDragging ? "absolute" : "relative",
        transform: `translate(0, ${isDragging ? translateY : 0}px)`,
        right: isDragging ? "2.5%" : "0",
        top:
          heightChanging &&
          heightDirection === "up" &&
          (pieceHeight * window.innerHeight) / 10 - translateY >=
            window.innerHeight / 10
            ? `${translateY}px`
            : "0px",

        zIndex: isDragging ? 4 : 2,
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        id="extendHandle1"
        className={css.extendHandle}
        onTouchStart={handleTouchStart}
      ></button>
      <div className={css.imageBackground}>
        {!part.name ? (
          <span className={css.addPart}>Swipe up to add part!</span>
        ) : (
          <span className={css.addPart}>{part.name}</span>
        )}
      </div>
      <button
        id="extendHandle2"
        className={css.extendHandle}
        onTouchStart={handleTouchStart}
      ></button>
    </div>
  );
};

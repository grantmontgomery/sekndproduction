import * as React from "react";
import { useRectanglesDispatch } from "../../state/GridRectanglesContext";
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
  const rectanglesDispatch = useRectanglesDispatch();
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

  const determineImageBackgroundSource: () => string = () => {
    switch (part.type) {
      case "place":
        return part.source === "yelp" ? part.image_url : null;
      case "event":
        return part.source === "yelp" ? part.image_url : part.images[0].url;
      default:
        return "";
    }
  };

  return (
    <div
      className={css.dragWrapper}
      style={{
        height: calculateHeight(),
        border: part.name ? "none" : "1px solid red",
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
      <button
        className={css.removePart}
        onClick={() =>
          rectanglesDispatch({
            type: "REMOVE_PART_FROM_RECTANGLE",
            payload: { index: part.rectangleIndex },
          })
        }
      >
        X
      </button>

      <div className={css.imageBackground}>
        <img
          src={determineImageBackgroundSource()}
          alt={part.name ? part.name : ""}
        />
      </div>

      <span
        className={css.title}
        style={{ color: part.name ? "white" : "black" }}
      >
        {part.name ? part.name : "Swipe up to add Part!"}
      </span>

      <button
        id="extendHandle2"
        className={css.extendHandle}
        onTouchStart={handleTouchStart}
      ></button>
    </div>
  );
};

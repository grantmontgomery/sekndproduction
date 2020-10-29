import * as React from "react";
import { useRectanglesDispatch } from "../../state/GridRectanglesContext";
import { trackTimeLength } from "./Logic";
import { useGridState } from "../../state/SearchGridContext";
import css from "./ScheduleDragPiece.module.scss";

export const ScheduleDragPieceDisplay: React.FC<{
  translateY: number;
  touchDragging: boolean;
  mouseDragging: boolean;
  handleTouchStart: (any) => void;
  handleTouchEnd: (any) => void;
  handleMouseDown: (any) => void;
  handleMouseUp: (any) => void;
  heightChanging: boolean;
  part: { [key: string]: any };
  heightDirection: string;
  pieceHeight: number;
}> = ({
  translateY,
  touchDragging,
  handleTouchStart,
  handleTouchEnd,
  handleMouseDown,
  handleMouseUp,
  mouseDragging,
  part,
  heightDirection,
  heightChanging,
  pieceHeight,
}) => {
  const [imageLoaded, loadImage] = React.useState<boolean>(false);
  const rectanglesDispatch = useRectanglesDispatch();
  const { hourStringsTrue } = useGridState();

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
        border: part.name ? "none" : "solid 1px #2c5364",
        position: touchDragging || mouseDragging ? "absolute" : "relative",
        transform: `translate(0, ${
          touchDragging || mouseDragging ? translateY : 0
        }px)`,
        right: touchDragging || mouseDragging ? "2.5%" : "0",
        top:
          heightChanging &&
          heightDirection === "up" &&
          (pieceHeight * window.innerHeight) / 10 - translateY >=
            window.innerHeight / 10
            ? `${translateY}px`
            : "0px",

        zIndex: touchDragging ? 4 : 1,
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <button
        id="extendHandle1"
        className={css.extendHandle}
        onTouchStart={handleTouchStart}
        onMouseDown={handleMouseDown}
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

      <div
        className={css.imageBackground}
        style={{
          background: part.name
            ? "linear-gradient(45deg, #0f2027, #2c5364)"
            : "transparent",
        }}
      >
        <img
          style={{ opacity: imageLoaded ? "1" : "0" }}
          src={determineImageBackgroundSource()}
          alt={part.name ? part.name : ""}
          onLoad={() => loadImage(true)}
        />
      </div>

      <span
        className={css.title}
        style={{ color: !part.name ? "black" : "white" }}
      >
        {part.name ? part.name : "Swipe up to add Part!"}
      </span>
      {trackTimeLength(
        hourStringsTrue,
        part.rectangleIndex,
        part.pieceHeight,
        part.name ? true : false
      )}

      <button
        id="extendHandle2"
        className={css.extendHandle}
        onTouchStart={handleTouchStart}
        onMouseDown={handleMouseDown}
      ></button>
    </div>
  );
};

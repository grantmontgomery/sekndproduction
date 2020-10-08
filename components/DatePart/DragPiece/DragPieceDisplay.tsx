import * as React from "react";
import { DragState } from "./DragPiece";
import css from "./DragPiece.module.scss";

export const DragPieceDisplay: React.FC<{
  dragState: DragState;
  handleMouseDown: (event: React.MouseEvent) => void;
}> = ({
  dragState: {
    isDragging,
    originalX,
    originalY,
    translateX,
    translateY,
    lastTranslateX,
    lastTranslateY,
    draggingElement,
    droppable,
  },
  handleMouseDown,
}) => {
  console.log(isDragging);
  const checkDrag: () => { [key: string]: any } = () => {
    return isDragging
      ? {
          transform: `translate(${translateX}px, ${translateY}px) rotate(5deg)`,
          cursor: "grabbing",
          position: `${isDragging ? "absolute" : "relative"}`,
          zIndex: 1000,
          transition: "none",
          boxShadow: "0 3px 6px 1px rgba(50, 50, 50, 0.5)",
        }
      : {
          transform: "translate(0, 0)",
          position: "relative",
          cursor: "grab",
          zIndex: 1,
          transition: "transform 500ms",
        };
  };
  return (
    <div
      className={css.dragPiece}
      style={checkDrag()}
      onMouseDown={handleMouseDown}
      // onTouchStart={handleMouseDown}
    ></div>
  );
};

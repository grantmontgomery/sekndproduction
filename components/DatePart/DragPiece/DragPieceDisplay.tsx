import * as React from "react";
import { DragState } from "./DragPiece";
import css from "./DragPiece.module.scss";

export const DragPieceDisplay: React.FC<{ dragState: DragState }> = ({
  dragState: {
    isDragging,
    isMoving,
    originalX,
    originalY,
    translateX,
    translateY,
    lastTranslateX,
    lastTranslateY,
    draggingElement,
    droppable,
  },
}) => {
  return <div></div>;
};

import * as React from "react";
import {
  useRectanglesState,
  useRectanglesDispatch,
} from "../../../state/GridRectanglesContext";
import { DragPieceDisplay } from "./DragPieceDisplay";

export type DragState = {
  isDragging: boolean;
  originalX: number;
  originalY: number;
  translateX: number;
  translateY: number;
  lastTranslateX: number;
  lastTranslateY: number;
  draggingElement: any;
  droppable: HTMLDivElement | null;
};

export const DragPiece: React.FC<{ part: { [key: string]: any } }> = () => {
  const [state, setState] = React.useState<{
    isDragging: boolean;
    origin: { x: number; y: number };
    translation: { x: number; y: number };
  }>({
    isDragging: false,
    origin: { x: 0, y: 0 },
    translation: { x: 0, y: 0 },
  });

  const { isDragging, origin, translation } = state;

  const handleMouseDown = React.useCallback(({ target, clientX, clientY }) => {
    console.log(target);
    target.hidden = true;
    const elemBelow = document.elementFromPoint(clientX, clientY);
    target.hidden = false;
    console.log("DRAG   START");
    console.log(elemBelow);
    setState((state) => ({
      ...state,
      draggingElement: target,
      droppableElement: elemBelow,
      isDragging: true,
      origin: { x: clientX, y: clientY },
    }));
  }, []);

  const handleMouseMove = React.useCallback(
    ({ clientX, clientY, target }) => {
      if (state.isDragging) {
        target.hidden = true;
        const droppableElement = document.elementFromPoint(clientX, clientY);
        target.hidden = false;
        const translation = {
          x: clientX - state.origin.x,
          y: clientY - state.origin.y,
        };
        setState((state) => ({
          ...state,
          translation,
          droppableElement,
        }));
      } else {
        setState((state) => ({
          ...state,
          origin: { x: 0, y: 0 },
          translation: { x: 0, y: 0 },
          isDragging: false,
        }));
      }
    },
    [state.origin, state.isDragging]
  );

  // const handleMouseUp = useCallback(
  //   ({ clientX, clientY }) => {
  //     state.draggingElement.hidden = true;

  //     const droppableElement = document.elementFromPoint(clientX, clientY);
  //     state.draggingElement.hidden = false;

  //     appendToPlace(droppableElement);

  //     setState(state => ({
  //       ...state,
  //       isDragging: false
  //     }));
  //   },
  //   [isDragging]
  // );

  React.useEffect(() => {
    console.log(state);

    if (state.isDragging) {
      console.log(state);
      window.addEventListener("mousemove", handleMouseMove);
      // window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      // window.removeEventListener("mouseup", handleMouseUp);
      setState((state) => ({
        ...state,
        origin: { x: 0, y: 0 },
        translation: { x: 0, y: 0 },
        isDragging: false,
      }));
    }

    window.removeEventListener("mousemove", handleMouseMove);
  }, [isDragging]);

  const styles = React.useMemo(
    () => ({
      position: state.isDragging ? "absolute" : "relative",
      cursor: state.isDragging ? "-webkit-grabbing" : "-webkit-grab",
      transform: state.isDragging
        ? `translate(${state.translation.x}px, ${state.translation.y}px) rotate(5deg)`
        : `translate(${state.translation.x}px, ${state.translation.y}px)`,
      zIndex: state.isDragging ? 1000 : 3,
      transition: "none",
      boxShadow: state.isDragging
        ? "0 3px 6px 1px rgba(50, 50, 50, 0.5)"
        : "none",
    }),
    [isDragging, translation]
  );
  return (
    <DragPieceDisplay
      styles={styles}
      handleMouseDown={handleMouseDown}
    ></DragPieceDisplay>
  );
};

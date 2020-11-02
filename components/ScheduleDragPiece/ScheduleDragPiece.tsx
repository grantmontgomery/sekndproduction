import * as React from "react";
import { ScheduleDragPieceDisplay } from "./ScheduleDragPieceDisplay";
import css from "../ScheduleGrid/GridRectangle/GridRectangle.module.scss";
import {
  useRectanglesDispatch,
  useRectanglesState,
} from "../../state/GridRectanglesContext";

import { useTouchDispatch } from "../ScheduleGrid/Context";

export const ScheduleDragPiece: React.FC<{ part: { [key: string]: any } }> = ({
  part,
}) => {
  const [dragPosition, setPosition] = React.useState<{
    touchDragging: boolean;
    mouseDragging: boolean;
    origin: { y: number };
    translation: { y: number };
    initialScrollTop: number;
    moveScroll: boolean;
    scrollCounter: number;
    elementBelow: Element | null;
    draggingElement: any | null;
    heightDirection: string;
    heightChanging: boolean;
  }>({
    touchDragging: false,
    mouseDragging: false,
    heightChanging: false,
    moveScroll: false,
    origin: { y: 0 },
    translation: { y: 0 },
    initialScrollTop: 0,
    heightDirection: "",
    scrollCounter: 0,
    elementBelow: null,
    draggingElement: null,
  });

  const upScrollInterval: React.MutableRefObject<
    NodeJS.Timeout | undefined
  > = React.useRef();

  const downScrollInterval: React.MutableRefObject<
    NodeJS.Timeout | undefined
  > = React.useRef();

  const rectanglesDispatch = useRectanglesDispatch();
  const { rectangles } = useRectanglesState();
  const touchDispatch = useTouchDispatch();

  /////////////////////////////////////  Touch Functions ////////////////////////////////////////////////////////

  const handleTouchStart = ({ touches, target, currentTarget }): void => {
    const { clientY, clientX } = touches[0];

    if (target.className.includes("extendHandle")) {
      setPosition((position) => ({
        ...position,
        heightChanging: true,
        touchDragging: false,
        heightDirection: target.id === "extendHandle1" ? "up" : "down",
        origin: { y: clientY },
      }));
    } else {
      const initialScrollTop: number = document.getElementById("innerGrid")
        .scrollTop;

      currentTarget.hidden = true;
      const elementBelow: Element = document.elementFromPoint(clientX, clientY);
      currentTarget.hidden = false;

      setPosition((dragPosition) => ({
        ...dragPosition,
        touchDragging: true,
        heightChanging: false,
        initialScrollTop,
        draggingElement: currentTarget,
        origin: { y: clientY },
        elementBelow,
      }));
    }
    touchDispatch({ type: "STOP_TOUCH_SCROLL" });
  };

  const handleTouchMove = React.useCallback(
    ({ touches, currentTarget, target }): void => {
      if (window) {
        if (dragPosition.touchDragging) {
          const { clientY, clientX } = touches[0];
          dragPosition.draggingElement.hidden = true;
          dragPosition.draggingElement.childNodes[0].hidden = true;

          const elementBelow: Element = document.elementFromPoint(
            clientX,
            clientY
          );
          dragPosition.draggingElement.hidden = false;
          dragPosition.draggingElement.childNodes[0].hidden = false;

          setPosition((dragPosition) => ({
            ...dragPosition,
            touchDragging: true,
            translation: {
              y: clientY - dragPosition.origin.y + dragPosition.scrollCounter,
            },
            moveScroll:
              clientY >= window.innerHeight * 0.7 ||
              clientY <= window.innerHeight * 0.38,
            elementBelow,
          }));
        } else {
          setPosition({
            touchDragging: false,
            origin: { y: 0 },
            translation: { y: 0 },
            initialScrollTop: 0,
            mouseDragging: false,
            moveScroll: false,
            elementBelow: null,
            draggingElement: null,
            heightChanging: false,
            scrollCounter: 0,
            heightDirection: "",
          });
        }
      }
    },
    [dragPosition.touchDragging]
  );

  const handleTouchEnd = (): void => {
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
    window.removeEventListener("touchmove", handleExtendRetract);

    if (dragPosition.draggingElement) {
      if (
        dragPosition.elementBelow &&
        dragPosition.elementBelow.className.includes("GridRectangle")
      ) {
        const rectangleElements: Element[] = Array.from(
          document.getElementsByClassName(css.rectangle)
        );

        rectangleElements.forEach((rectangle, index) => {
          if (
            dragPosition.elementBelow === rectangle &&
            !rectangles[index].part
          ) {
            rectanglesDispatch({
              type: "ADD_PART_TO_RECTANGLE",
              payload: { index, part: { ...part, rectangleIndex: index } },
            });
            rectanglesDispatch({
              type: "REMOVE_PART_FROM_RECTANGLE",
              payload: { index: part.rectangleIndex },
            });
          }
        });
      }
    } else {
      const rectangleCountDown: number = Math.round(
        (dragPosition.translation.y * 10) / window.innerHeight
      );

      const rectangleCountUp: number = Math.round(
        (dragPosition.translation.y * -10) / window.innerHeight
      );

      const originalRectangleIndex: number = part.rectangleIndex;
      const originalRectangleHeight: number = part.pieceHeight;

      switch (dragPosition.heightDirection) {
        case "down":
          if (
            rectangleCountDown !== 0 &&
            rectangleCountDown + part.pieceHeight >= 1
          ) {
            rectanglesDispatch({
              type: "CHANGE_PIECE_HEIGHT",
              payload: {
                index: originalRectangleIndex,
                pieceHeight: rectangleCountDown + originalRectangleHeight,
              },
            });
          }
        case "up":
          if (
            rectangleCountUp !== 0 &&
            dragPosition.heightDirection === "up" &&
            rectangleCountUp + part.pieceHeight >= 1
          ) {
            rectanglesDispatch({
              type: "REMOVE_PART_FROM_RECTANGLE",
              payload: { index: originalRectangleIndex },
            });

            rectanglesDispatch({
              type: "ADD_PART_TO_RECTANGLE",
              payload: {
                index: originalRectangleIndex - rectangleCountUp,
                part: {
                  ...part,
                  pieceHeight: rectangleCountUp + originalRectangleHeight,
                  rectangleIndex: originalRectangleIndex - rectangleCountUp,
                },
              },
            });
          }
        default:
          null;
      }
    }
    touchDispatch({ type: "ACTIVATE_TOUCH_SCROLL" });
    setPosition({
      touchDragging: false,
      origin: { y: 0 },
      translation: { y: 0 },
      initialScrollTop: 0,
      moveScroll: false,
      mouseDragging: false,
      elementBelow: null,
      draggingElement: null,
      scrollCounter: 0,
      heightChanging: false,
      heightDirection: "",
    });
  };

  ////////////////////////////////////////// Mouse Functions //////////////////////////////////////////////////////////////

  const handleMouseDown: ({
    target,
    currentTarget,
    clientX,
    clientY,
  }) => void = ({ target, currentTarget, clientX, clientY }) => {
    switch (target.className) {
      case target.className.includes("extendHandle"):
        setPosition((position) => ({
          ...position,
          heightChanging: true,
          mouseDragging: false,
          heightDirection: target.id === "extendHandle1" ? "up" : "down",
          origin: { y: clientY },
        }));
      case target.className.includes("removePart"):
        setPosition((position) => ({
          ...position,
          heightChanging: false,
          mouseDragging: false,
          touchDragging: false,
        }));
        rectanglesDispatch({
          type: "REMOVE_PART_FROM_RECTANGLE",
          payload: { index: part.rectangleIndex },
        });
      default:
        const initialScrollTop: number = document.getElementById("innerGrid")
          .scrollTop;

        currentTarget.hidden = true;
        const elementBelow: Element = document.elementFromPoint(
          clientX,
          clientY
        );
        currentTarget.hidden = false;

        setPosition((dragPosition) => ({
          ...dragPosition,
          mouseDragging: true,
          heightChanging: false,
          initialScrollTop,
          draggingElement: currentTarget,
          origin: { y: clientY },
          elementBelow,
        }));
    }
    console.log(target);
  };

  const handleMouseMove = React.useCallback(
    ({ currentTarget, target, clientY, clientX }): void => {
      if (window) {
        if (dragPosition.mouseDragging) {
          dragPosition.draggingElement.hidden = true;
          dragPosition.draggingElement.childNodes[0].hidden = true;

          const elementBelow: Element = document.elementFromPoint(
            clientX,
            clientY
          );
          dragPosition.draggingElement.hidden = false;
          dragPosition.draggingElement.childNodes[0].hidden = false;

          setPosition((dragPosition) => ({
            ...dragPosition,
            mouseDragging: true,
            translation: {
              y: clientY - dragPosition.origin.y + dragPosition.scrollCounter,
            },
            moveScroll:
              clientY >= window.innerHeight * 0.7 ||
              clientY <= window.innerHeight * 0.05,
            elementBelow,
          }));
        } else {
          setPosition({
            touchDragging: false,
            origin: { y: 0 },
            translation: { y: 0 },
            initialScrollTop: 0,
            mouseDragging: false,
            moveScroll: false,
            elementBelow: null,
            draggingElement: null,
            heightChanging: false,
            scrollCounter: 0,
            heightDirection: "",
          });
        }
      }
    },
    [dragPosition.mouseDragging]
  );

  const handleMouseUp = (): void => {
    window.removeEventListener("mousemove", handleTouchMove);
    window.removeEventListener("mouseup", handleMouseUp);

    if (dragPosition.draggingElement) {
      if (
        dragPosition.elementBelow &&
        dragPosition.elementBelow.className.includes("GridRectangle")
      ) {
        const rectangleElements: Element[] = Array.from(
          document.getElementsByClassName(css.rectangle)
        );

        rectangleElements.forEach((rectangle, index) => {
          if (
            dragPosition.elementBelow === rectangle &&
            !rectangles[index].part
          ) {
            rectanglesDispatch({
              type: "ADD_PART_TO_RECTANGLE",
              payload: { index, part: { ...part, rectangleIndex: index } },
            });
            rectanglesDispatch({
              type: "REMOVE_PART_FROM_RECTANGLE",
              payload: { index: part.rectangleIndex },
            });
          }
        });
      }
    } else {
      const rectangleCountDown: number = Math.round(
        (dragPosition.translation.y * 10) / window.innerHeight
      );

      const rectangleCountUp: number = Math.round(
        (dragPosition.translation.y * -10) / window.innerHeight
      );

      const originalRectangleIndex: number = part.rectangleIndex;
      const originalRectangleHeight: number = part.pieceHeight;

      switch (dragPosition.heightDirection) {
        case "down":
          if (
            rectangleCountDown !== 0 &&
            rectangleCountDown + part.pieceHeight >= 1
          ) {
            rectanglesDispatch({
              type: "CHANGE_PIECE_HEIGHT",
              payload: {
                index: originalRectangleIndex,
                pieceHeight: rectangleCountDown + originalRectangleHeight,
              },
            });
          }
        case "up":
          if (
            rectangleCountUp !== 0 &&
            dragPosition.heightDirection === "up" &&
            rectangleCountUp + part.pieceHeight >= 1
          ) {
            rectanglesDispatch({
              type: "REMOVE_PART_FROM_RECTANGLE",
              payload: { index: originalRectangleIndex },
            });

            rectanglesDispatch({
              type: "ADD_PART_TO_RECTANGLE",
              payload: {
                index: originalRectangleIndex - rectangleCountUp,
                part: {
                  ...part,
                  pieceHeight: rectangleCountUp + originalRectangleHeight,
                  rectangleIndex: originalRectangleIndex - rectangleCountUp,
                },
              },
            });
          }
        default:
          null;
      }
    }
    setPosition({
      touchDragging: false,
      origin: { y: 0 },
      translation: { y: 0 },
      initialScrollTop: 0,
      moveScroll: false,
      elementBelow: null,
      mouseDragging: false,
      draggingElement: null,
      scrollCounter: 0,
      heightChanging: false,
      heightDirection: "",
    });
  };

  const handleExtendRetract = React.useCallback(
    ({ touches, currentTarget, target }: any): void => {
      if (window) {
        if (dragPosition.heightChanging) {
          const { clientY, clientX } = touches[0];
          setPosition((dragPosition) => ({
            ...dragPosition,
            heightChanging: true,
            translation: {
              y: clientY - dragPosition.origin.y + dragPosition.scrollCounter,
            },
            moveScroll:
              clientY >= window.innerHeight * 0.7 ||
              clientY <= window.innerHeight * 0.38,
          }));
        } else {
          setPosition({
            touchDragging: false,
            origin: { y: 0 },
            mouseDragging: false,
            translation: { y: 0 },
            initialScrollTop: 0,
            moveScroll: false,
            elementBelow: null,
            draggingElement: null,
            scrollCounter: 0,
            heightChanging: false,
            heightDirection: "",
          });
        }
      }
    },
    [dragPosition.heightChanging]
  );

  React.useEffect(() => {
    console.log(dragPosition.mouseDragging);
    dragPosition.mouseDragging
      ? window.addEventListener("mousemove", handleMouseMove)
      : window.removeEventListener("mousemove", handleMouseMove);
  }, [dragPosition.mouseDragging]);

  React.useEffect(() => {
    dragPosition.touchDragging
      ? window.addEventListener("touchmove", handleTouchMove)
      : window.removeEventListener("touchmove", handleTouchMove);
  }, [dragPosition.touchDragging]);

  React.useEffect(() => {
    dragPosition.heightChanging
      ? window.addEventListener("touchmove", handleExtendRetract)
      : window.removeEventListener("touchmove", handleExtendRetract);
  }, [dragPosition.heightChanging]);

  React.useEffect(() => {
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("touchstart", handleTouchStart);
      clearInterval(upScrollInterval.current);
      clearInterval(downScrollInterval.current);
    };
  }, []);

  React.useEffect(() => {
    if (dragPosition.moveScroll) {
      dragPosition.translation.y > 0
        ? (downScrollInterval.current = setInterval(() => {
            document.getElementById("innerGrid").scrollBy(0, 1);
            setPosition((position) => ({
              ...position,
              scrollCounter: position.scrollCounter + 1,
            }));
          }, 5))
        : (upScrollInterval.current = setInterval(() => {
            document.getElementById("innerGrid").scrollBy(0, -1);
            setPosition((position) => ({
              ...position,
              scrollCounter: position.scrollCounter - 1,
            }));
          }, 5));
    } else {
      setPosition((position) => ({
        ...position,
        origin: { y: position.origin.y + position.scrollCounter },
      }));
      setPosition((position) => ({
        ...position,
        scrollCounter: 0,
      }));
      clearInterval(upScrollInterval.current);
      clearInterval(downScrollInterval.current);
    }
  }, [dragPosition.moveScroll]);

  return (
    <ScheduleDragPieceDisplay
      part={part}
      translateY={dragPosition.translation.y}
      touchDragging={dragPosition.touchDragging}
      mouseDragging={dragPosition.mouseDragging}
      handleTouchStart={handleTouchStart}
      handleTouchEnd={handleTouchEnd}
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
      heightDirection={dragPosition.heightDirection}
      pieceHeight={part.pieceHeight}
      heightChanging={dragPosition.heightChanging}
    ></ScheduleDragPieceDisplay>
  );
};

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
    mouseHeightChanging: boolean;
  }>({
    touchDragging: false,
    mouseDragging: false,
    heightChanging: false,
    moveScroll: false,
    mouseHeightChanging: false,
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

  const handleTouchStart = ({
    touches,
    target,
    currentTarget,
  }: {
    touches: any;
    target: any;
    currentTarget: any;
  }): void => {
    const { clientY, clientX } = touches[0];

    if (target.className.includes("extendHandle")) {
      setPosition((position) => ({
        ...position,
        heightChanging: true,
        mouseHeightChanging: false,
        touchDragging: false,
        heightDirection: target.id === "extendHandle1" ? "up" : "down",
        origin: { y: clientY },
      }));
    } else {
      const innerGrid = document.getElementById("innerGrid");

      const initialScrollTop: number = innerGrid ? innerGrid.scrollTop : 0;

      currentTarget.hidden = true;
      const elementBelow: Element | null = document.elementFromPoint(
        clientX,
        clientY
      );
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

          const elementBelow: Element | null = document.elementFromPoint(
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
            mouseHeightChanging: false,
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
      mouseHeightChanging: false,
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
  }: {
    target: any;
    currentTarget: any;
    clientX: any;
    clientY: any;
  }) => void = ({ target, currentTarget, clientX, clientY }) => {
    if (target.className.includes("extendHandle")) {
      setPosition((position) => ({
        ...position,
        heightChanging: true,
        mouseHeightChanging: true,
        mouseDragging: false,
        heightDirection: target.id === "extendHandle1" ? "up" : "down",
        origin: { y: clientY },
      }));
    } else if (target.className.includes("removePart")) {
      setPosition((position) => ({
        ...position,
        heightChanging: false,
        mouseDragging: false,
        touchDragging: false,
      }));
    } else {
      const innerGrid = document.getElementById("innerGrid");

      const initialScrollTop: number = innerGrid ? innerGrid.scrollTop : 0;
      currentTarget.hidden = true;
      const elementBelow: Element | null = document.elementFromPoint(
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
  };

  const handleMouseMove = React.useCallback(
    ({ currentTarget, target, clientY, clientX }): void => {
      if (window) {
        if (dragPosition.mouseDragging) {
          dragPosition.draggingElement.hidden = true;
          dragPosition.draggingElement.childNodes[0].hidden = true;

          const elementBelow: Element | null = document.elementFromPoint(
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
            // moveScroll:
            //   clientY >= window.innerHeight * 0.7 ||
            //   clientY <= window.innerHeight * 0.05,
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
            mouseHeightChanging: false,
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
    console.log();
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
      mouseHeightChanging: false,
      draggingElement: null,
      scrollCounter: 0,
      heightChanging: false,
      heightDirection: "",
    });
  };

  const handleExtendRetractMouse = React.useCallback(
    ({ currentTarget, target, clientY, clientX }: any): void => {
      if (window) {
        if (dragPosition.heightChanging) {
          setPosition((dragPosition) => ({
            ...dragPosition,
            heightChanging: true,
            translation: {
              y: clientY - dragPosition.origin.y + dragPosition.scrollCounter,
            },

            // moveScroll: dragPosition.mouseHeightChanging
            //   ? false
            //   : clientY >= window.innerHeight * 0.7 ||
            //     clientY <= window.innerHeight * 0.38,
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
            mouseHeightChanging: false,
            heightDirection: "",
          });
        }
      }
    },
    [dragPosition.heightChanging]
  );

  const handleExtendRetract = React.useCallback(
    ({ touches, currentTarget, target, clientY, clientX }: any): void => {
      if (window) {
        if (dragPosition.heightChanging) {
          const { clientY } = touches[0];
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
            mouseHeightChanging: false,
            heightDirection: "",
          });
        }
      }
    },
    [dragPosition.heightChanging]
  );

  React.useEffect(() => {
    dragPosition.mouseDragging
      ? window.addEventListener("mousemove", handleMouseMove)
      : window.removeEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [dragPosition.mouseDragging]);

  React.useEffect(() => {
    dragPosition.touchDragging
      ? window.addEventListener("touchmove", handleTouchMove)
      : window.removeEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [dragPosition.touchDragging]);

  React.useEffect(() => {
    if (dragPosition.heightChanging) {
      dragPosition.mouseHeightChanging
        ? window.addEventListener("mousemove", handleExtendRetractMouse)
        : window.addEventListener("touchmove", handleExtendRetract);
    } else {
      window.removeEventListener("mousemove", handleExtendRetractMouse);
      window.removeEventListener("touchmove", handleExtendRetract);
    }
    return () => {
      window.removeEventListener("mousemove", handleExtendRetractMouse);
      window.removeEventListener("touchmove", handleExtendRetract);
    };
  }, [dragPosition.heightChanging]);

  React.useEffect(() => {
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleExtendRetractMouse);
      window.removeEventListener("touchmove", handleExtendRetract);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (upScrollInterval.current) clearInterval(upScrollInterval.current);
      if (downScrollInterval.current) clearInterval(downScrollInterval.current);
      setPosition({
        touchDragging: false,
        origin: { y: 0 },
        mouseDragging: false,
        translation: { y: 0 },
        initialScrollTop: 0,
        mouseHeightChanging: false,
        moveScroll: false,
        elementBelow: null,
        draggingElement: null,
        scrollCounter: 0,
        heightChanging: false,
        heightDirection: "",
      });
    };
  }, []);

  React.useEffect(() => {
    const innerGrid = document.getElementById("innerGrid");
    if (dragPosition.moveScroll && innerGrid) {
      dragPosition.translation.y > 0
        ? (downScrollInterval.current = setInterval(() => {
            innerGrid.scrollBy(0, 1);
            setPosition((position) => ({
              ...position,
              scrollCounter: position.scrollCounter + 1,
            }));
          }, 5))
        : (upScrollInterval.current = setInterval(() => {
            innerGrid.scrollBy(0, -1);
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
      if (upScrollInterval.current) clearInterval(upScrollInterval.current);
      if (downScrollInterval.current) clearInterval(downScrollInterval.current);
    }
    return () => {
      if (upScrollInterval.current) clearInterval(upScrollInterval.current);
      if (downScrollInterval.current) clearInterval(downScrollInterval.current);
    };
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

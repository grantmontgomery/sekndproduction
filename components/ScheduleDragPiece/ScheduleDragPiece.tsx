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
    isDragging: boolean;
    origin: { y: number };
    translation: { y: number };
    initialScrollTop: number;
    moveScroll: boolean;
    scrollCounter: number;
    elementBelow: Element | null;
    draggingElement: any | null;
  }>({
    isDragging: false,
    moveScroll: false,
    origin: { y: 0 },
    translation: { y: 0 },
    initialScrollTop: 0,
    scrollCounter: 0,
    elementBelow: null,
    draggingElement: null,
  });
  const [height, extend] = React.useState<string>("10vh");

  const upScrollInterval: React.MutableRefObject<
    NodeJS.Timeout | undefined
  > = React.useRef();

  const downScrollInterval: React.MutableRefObject<
    NodeJS.Timeout | undefined
  > = React.useRef();

  const rectanglesDispatch = useRectanglesDispatch();
  const { rectangles } = useRectanglesState();
  const touchDispatch = useTouchDispatch();

  const handleTouchStart = ({ touches, currentTarget }): void => {
    const { clientY, clientX } = touches[0];
    const initialScrollTop: number = document.getElementById("innerGrid")
      .scrollTop;

    currentTarget.hidden = true;
    const elementBelow: Element = document.elementFromPoint(clientX, clientY);
    currentTarget.hidden = false;

    setPosition((dragPosition) => ({
      ...dragPosition,
      isDragging: true,
      initialScrollTop,
      draggingElement: currentTarget,
      origin: { y: clientY },
      elementBelow,
    }));
  };

  const handleTouchMove = React.useCallback(
    ({ touches, currentTarget, target }): void => {
      if (window) {
        if (dragPosition.isDragging) {
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
            isDragging: true,
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
            isDragging: false,
            origin: { y: 0 },
            translation: { y: 0 },
            initialScrollTop: 0,
            moveScroll: false,
            elementBelow: null,
            draggingElement: null,
            scrollCounter: 0,
          });
        }
      }
    },
    [dragPosition.isDragging]
  );

  const handleTouchEnd = (): void => {
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);

    if (dragPosition.elementBelow.className.includes("GridRectangle")) {
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

    setPosition({
      isDragging: false,
      origin: { y: 0 },
      translation: { y: 0 },
      initialScrollTop: 0,
      moveScroll: false,
      elementBelow: null,
      draggingElement: null,
      scrollCounter: 0,
    });
  };

  React.useEffect(() => {
    if (dragPosition.isDragging) {
      window.addEventListener("touchmove", handleTouchMove);
      touchDispatch({ stopTouch: true });
    } else {
      window.removeEventListener("touchmove", handleTouchMove);
      touchDispatch({ stopTouch: false });
    }
  }, [dragPosition.isDragging]);

  React.useEffect(() => {
    return () => {
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
      translateY={dragPosition.translation.y}
      isDragging={dragPosition.isDragging}
      handleTouchStart={(event) => handleTouchStart(event)}
      handleTouchEnd={handleTouchEnd}
      height={height}
    ></ScheduleDragPieceDisplay>
  );
};

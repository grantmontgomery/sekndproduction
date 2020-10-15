import * as React from "react";
import { ScheduleDragPieceDisplay } from "./ScheduleDragPieceDisplay";
import css from "./ScheduleDragPiece.module.scss";

export const ScheduleDragPiece: React.FC<{ part?: { [key: string]: any } }> = ({
  part,
}) => {
  const [dragPosition, setPosition] = React.useState<{
    isDragging: boolean;
    origin: { y: number };
    translation: { y: number };
    initialScrollTop: number;
    moveScroll: boolean;
    // clientY: number;
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
    // clientY: 0,
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

  const handleTouchStart = ({ touches, currentTarget, target }): void => {
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
          // dragPosition.draggingElement.childNodes[0].forEach((element) => {
          //   element.hidden = true;
          // });
          const elementBelow: Element = document.elementFromPoint(
            clientX,
            clientY
          );
          dragPosition.draggingElement.hidden = false;
          dragPosition.draggingElement.childNodes[0].hidden = false;
          // dragPosition.draggingElement.childNodes[0].forEach((element) => {
          //   element.hidden = false;
          // });
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
    } else {
      window.removeEventListener("touchmove", handleTouchMove);
    }
  }, [dragPosition.isDragging]);

  React.useEffect(() => {
    return window.removeEventListener("touchstart", handleTouchStart);
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
      handleTouchStart={handleTouchStart}
      handleTouchEnd={handleTouchEnd}
      height={height}
    ></ScheduleDragPieceDisplay>
  );
};

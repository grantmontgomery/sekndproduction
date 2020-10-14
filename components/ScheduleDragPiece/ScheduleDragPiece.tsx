import { a } from "aws-amplify";
import * as React from "react";
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
  }>({
    isDragging: false,
    moveScroll: false,
    origin: { y: 0 },
    translation: { y: 0 },
    initialScrollTop: 0,
  });
  const [height, extend] = React.useState<string>("10vh");

  const handleTouchStart = ({ touches, currentTarget, target }): void => {
    const { clientY } = touches[0];
    const initialScrollTop: number = document.getElementById("innerGrid")
      .scrollTop;

    setPosition((dragPosition) => ({
      ...dragPosition,
      isDragging: true,
      initialScrollTop,
      origin: { y: clientY },
    }));
  };

  const handleTouchMove = React.useCallback(
    ({ touches }: TouchEvent): void => {
      if (window) {
        if (dragPosition.isDragging) {
          const { clientY } = touches[0];
          setPosition((dragPosition) => ({
            ...dragPosition,
            isDragging: true,
            translation: {
              y: clientY - dragPosition.origin.y,
            },
            moveScroll:
              clientY >= window.innerHeight * 0.75 ||
              clientY <= window.innerHeight / 3,
          }));
        } else {
          setPosition({
            isDragging: false,
            origin: { y: 0 },
            translation: { y: 0 },
            initialScrollTop: 0,
            moveScroll: false,
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
    });
  };

  const autoScroll: (direction?: string, element?: HTMLElement) => void = (
    direction,
    element
  ) => {
    if (element) {
      direction === "up"
        ? setInterval(() => element.scrollBy(0, -1), 10)
        : setInterval(() => element.scrollBy(0, 1), 10);
    }
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
    const innerGrid: HTMLElement = document.getElementById("innerGrid");

    if (dragPosition.moveScroll) {
      // dragPosition.translation.y > 0
      //   ? autoScroll("down", innerGrid)
      //   : autoScroll("up", innerGrid);
    } else {
      innerGrid.scrollTop = dragPosition.initialScrollTop;
    }
  }, [dragPosition.moveScroll]);

  return (
    <div
      className={css.dragWrapper}
      style={{
        height,
        position: dragPosition.isDragging ? "absolute" : "relative",
        transform: `translate(0, ${dragPosition.translation.y}px)`,
        zIndex: dragPosition.isDragging ? 4 : null,
      }}
    >
      <button className={css.extendHandle}></button>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={css.imageBackground}
      ></div>
      <button className={css.extendHandle}></button>
    </div>
  );
};

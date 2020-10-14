import * as React from "react";
import css from "./ScheduleDragPiece.module.scss";

export const ScheduleDragPiece: React.FC<{ part?: { [key: string]: any } }> = ({
  part,
}) => {
  const [position, setPosition] = React.useState<{
    isDragging: boolean;
    origin: { y: number };
    translation: { y: number };
    initialScrollTop: number;
  }>({
    isDragging: false,
    origin: { y: 0 },
    translation: { y: 0 },
    initialScrollTop: 0,
  });

  const [height, extend] = React.useState<string>("10vh");

  const handleTouchStart = ({ touches, currentTarget, target }): void => {
    const { clientY } = touches[0];
    const initialScrollTop: number = document.getElementById("innerGrid")
      .scrollTop;

    console.log(document.getElementById("innerGrid").clientHeight);
    setPosition((position) => ({
      ...position,
      isDragging: true,
      initialScrollTop,
      origin: { y: clientY },
    }));
  };

  const handleTouchMove = React.useCallback(
    ({ touches }: TouchEvent): void => {
      if (position.isDragging) {
        const { clientY } = touches[0];
        setPosition((position) => ({
          ...position,
          isDragging: true,
          translation: {
            y: clientY - position.origin.y,
          },
        }));
      } else {
        setPosition({
          isDragging: false,
          origin: { y: 0 },
          translation: { y: 0 },
          initialScrollTop: 0,
        });
      }
    },
    [position.isDragging]
  );

  const handleTouchEnd = (): void => {
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
    setPosition({
      isDragging: false,
      origin: { y: 0 },
      translation: { y: 0 },
      initialScrollTop: 0,
    });
  };

  React.useEffect(() => {
    if (position.isDragging) {
      window.addEventListener("touchmove", handleTouchMove);
    } else {
      window.removeEventListener("touchmove", handleTouchMove);
    }
  }, [position.isDragging]);

  React.useEffect(() => {
    return window.removeEventListener("touchstart", handleTouchStart);
  }, []);
  console.log(position.translation.y);
  React.useEffect(() => {
    const innerGrid: HTMLElement = document.getElementById("innerGrid");
    if (position.initialScrollTop + position.translation.y <= 0)
      innerGrid.scrollTop = 0;
    innerGrid.scrollTop = position.initialScrollTop + position.translation.y;
  }, [position.translation.y]);

  return (
    <div
      className={css.dragWrapper}
      style={{
        height,
        position: position.isDragging ? "absolute" : "relative",
        transform: `translate(0, ${position.translation.y}px)`,
        zIndex: position.isDragging ? 4 : null,
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

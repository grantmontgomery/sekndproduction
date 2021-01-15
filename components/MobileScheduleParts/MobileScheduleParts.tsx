import * as React from "react";
import { usePartsState } from "../../state/DatePartsContext";
import {
  useRectanglesDispatch,
  useRectanglesState,
} from "../../state/GridRectanglesContext";
import css from "./MobileScheduleParts.module.scss";
import { PartItems } from "./PartItems";

export const MobileScheduleParts: React.FC<{
  parts: { [key: string]: any }[];
  translateY: number;
  extend: boolean;
}> = ({ parts, translateY, extend }) => {
  const [state, setState] = React.useState<{ squareIndex: number }>({
    squareIndex: 0,
  });
  const { rectangles } = useRectanglesState();

  const observer: React.MutableRefObject<
    IntersectionObserver | undefined
  > = React.useRef();
  const rectanglesDispatch = useRectanglesDispatch();
  React.useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, intersectionRatio } = entry;
          const entryIndex: number = parseInt(target.id[target.id.length - 1]);
          intersectionRatio === 1 && setState({ squareIndex: entryIndex });
        });
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );
    parts.forEach((part, index) => {
      const targetSensor = document.getElementById(`sensor${index}`);

      observer.current &&
        targetSensor &&
        observer.current.observe(targetSensor);
    });
    return () => {
      observer.current && observer.current.disconnect();
    };
  }, []);

  React.useEffect(() => {
    const currentCustomIndex: number | null = rectangles.findIndex(
      (rectangle) => rectangle.part && rectangle.part.current
    );

    if (currentCustomIndex) {
      extend
        ? rectanglesDispatch({
            type: "SET_PIECE",
            payload: {
              index: currentCustomIndex,
              part: parts[state.squareIndex],
            },
          })
        : rectanglesDispatch({
            type: "SET_PIECE",
            payload: { index: currentCustomIndex, part: { current: false } },
          });
    }
  }, [state.squareIndex, extend]);

  return (
    <div
      className={css.container}
      style={{
        display: !extend && translateY >= 0 ? "none" : "block",
        opacity:
          translateY >= -50 && !extend ? `${(translateY / 100) * -1}` : "1",
      }}
    >
      {/* <div className={css.opacityBar}></div> */}
      <PartItems list={parts} squareIndex={state.squareIndex}></PartItems>
      <div className={css.scrollWrapper}>
        <div className={css.secretScroll} id="secretScroll">
          {parts.map((item, index) => (
            <div
              key={`sensor${index}`}
              className={css.sensorSquare}
              id={`sensor${index}`}
            ></div>
          ))}
        </div>
      </div>
      {/* <div className={css.opacityBar}></div> */}
    </div>
  );
};

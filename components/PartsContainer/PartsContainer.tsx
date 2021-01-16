import * as React from "react";
import { MobileScheduleParts } from "../MobileScheduleParts";
import { usePartsState } from "../../state/DatePartsContext";
import { useTouchDispatch, useTouchState } from "../ScheduleGrid/Context";
import { useRectanglesState } from "../../state/GridRectanglesContext";
import css from "./PartsContainer.module.scss";

export const PartsContainer: React.FC = () => {
  const [extend, setExtend] = React.useState<boolean>(false);
  const [state, setState] = React.useState<{
    isDragging: boolean;
    origin: { y: number };
    translation: { y: number };
  }>({ isDragging: false, origin: { y: 0 }, translation: { y: 0 } });

  const touchDispatch = useTouchDispatch();
  const { customPiece } = useTouchState();
  const { rectangles } = useRectanglesState();

  const handleTouchStart = ({ touches }: any) => {
    const { clientY } = touches[0];
    setState((state) => ({
      ...state,
      isDragging: true,
      origin: { y: clientY },
    }));
    setExtend(false);
  };

  const handleTouchMove = React.useCallback(
    ({ touches }: TouchEvent): void => {
      if (state.isDragging) {
        const { clientY } = touches[0];
        setState({
          isDragging: true,
          origin: { y: state.origin.y },
          translation: {
            y: clientY <= state.origin.y ? clientY - state.origin.y : 0,
          },
        });
      } else {
        setState({
          isDragging: false,
          origin: { y: 0 },
          translation: { y: 0 },
        });
      }
    },
    [state.isDragging]
  );

  const handleTouchEnd = (): void => {
    if (state.translation.y <= -50) {
      setExtend(true);
    }
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
    setState({ isDragging: false, origin: { y: 0 }, translation: { y: 0 } });
  };

  React.useEffect(() => {
    const currentCustomIndex: number | null = rectangles.findIndex(
      (rectangle: any) => rectangle.part && rectangle.part.current
    );

    if (extend) {
      const innerGrid = document.getElementById("innerGrid");

      customPiece &&
        currentCustomIndex &&
        innerGrid &&
        innerGrid.scrollTo(0, (currentCustomIndex * window.innerHeight) / 10);

      touchDispatch({ type: "STOP_TOUCH_SCROLL" });
    } else {
      touchDispatch({ type: "ACTIVATE_TOUCH_SCROLL" });
      touchDispatch({ type: "REMOVE_CUSTOM_PIECE" });
    }
  }, [extend]);

  React.useEffect(() => {
    if (state.isDragging) {
      window.addEventListener("touchmove", handleTouchMove);
    } else {
      window.removeEventListener("touchmove", handleTouchMove);
    }
  }, [state.isDragging]);

  const calculateHeight: () => string = () => {
    if (extend === true) return "50%";
    return state.translation.y >= -300 && !extend
      ? `calc(20% - ${state.translation.y}px)`
      : "50%";
  };

  const changeArrow: () => string = () => {
    if (extend === true) return "3 3 75 3 147 3";
    return state.translation.y >= -50
      ? `3 ${48 + state.translation.y * 0.9} 75 3 147 ${
          48 + state.translation.y * 0.9
        }`
      : "3 3 75 3 147 3";
  };

  const { parts } = usePartsState();

  return (
    <section
      className={css.partsContainer}
      style={{ height: calculateHeight() }}
    >
      <svg
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 51"
      >
        <title>Asset 2</title>
        <polyline className={css.arrow} points={changeArrow()} />
      </svg>
      <MobileScheduleParts
        extend={extend}
        translateY={state.translation.y}
        parts={parts}
      ></MobileScheduleParts>
    </section>
  );
};

import * as React from "react";
import { DatePart } from "../DatePart/DatePart";
import { usePartsState } from "../../state/DatePartsContext";
import { useTouchState } from "../ScheduleGrid/Context";
import css from "./SchedulePartSelector.module.scss";

export const SchedulePartSelector: React.FC = () => {
  const { customPiece } = useTouchState();
  const { parts } = usePartsState();
  return (
    <div className={css.selectorWrapper}>
      <header className={css.selectorDisplay}>
        <h1>{customPiece ? "Assign Part" : "Click on Grid"}</h1>
        {customPiece ? (
          <button className={css.assignButton}>
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 125.03 110"
              enableBackground="new 0 0 125.03 110"
            >
              <polygon points="54.51,81.07 23.98,50.54 31.05,43.46 54.51,66.93 114.98,6.46 122.05,13.54 	" />
              <path
                d="M104.3,38.35l-4.01,4.01c1.13,4.02,1.72,8.26,1.72,12.64c0,26.19-21.31,47.5-47.5,47.5S7.01,81.19,7.01,55
         S28.32,7.5,54.51,7.5c14.33,0,27.2,6.38,35.91,16.45l3.55-3.55C84.35,9.43,70.23,2.5,54.51,2.5C25.56,2.5,2.02,26.05,2.02,55
         s23.55,52.5,52.5,52.5s52.5-23.55,52.5-52.5C107.01,49.18,106.06,43.58,104.3,38.35z"
              />
            </svg>
          </button>
        ) : null}
      </header>
      <div
        className={css.partsWrapper}
        style={{
          pointerEvents: customPiece ? "all" : "none",
          filter: customPiece ? "none" : "blur(1.5px)",
        }}
      >
        {parts.map((part) => (
          <DatePart location="schedule" part={part}></DatePart>
        ))}
      </div>
    </div>
  );
};

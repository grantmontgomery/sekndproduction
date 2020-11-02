import * as React from "react";
import { DatePart } from "../DatePart/DatePart";
import { usePartsState } from "../../state/DatePartsContext";
import { ScheduleSelectPart } from "../ScheduleSelectPart";
import css from "./SchedulePartSelector.module.scss";

export const SchedulePartSelector: React.FC = () => {
  const { parts } = usePartsState();
  return (
    <div className={css.selectorWrapper}>
      <header className={css.selectorDisplay}></header>
      <div className={css.partsWrapper}>
        {parts.map((part) => (
          <DatePart location="schedule" part={part}></DatePart>
        ))}
      </div>
    </div>
  );
};

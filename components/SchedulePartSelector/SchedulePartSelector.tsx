import * as React from "react";
import { usePartsState } from "../../state/DatePartsContext";
import { ScheduleSelectPart } from "../ScheduleSelectPart";
import { DatePart } from "../DatePart";
import css from "./SchedulePartSelector.module.scss";

export const SchedulePartSelector: React.FC = () => {
  const { parts } = usePartsState();
  return (
    <div className={css.selectorWrapper}>
      <header></header>
      <div className={css.partsWrapper}>
        {parts.map((part) => (
          <ScheduleSelectPart part={part}></ScheduleSelectPart>
        ))}
      </div>
    </div>
  );
};

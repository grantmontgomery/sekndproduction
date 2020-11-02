import * as React from "react";
import css from "./ScheduleSelectPart.module.scss";

export const ScheduleSelectPart: React.FC<{ part: { [key: string]: any } }> = ({
  part,
}) => {
  return <div className={css.partWrapper}></div>;
};

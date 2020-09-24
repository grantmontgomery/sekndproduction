import * as React from "react";
import { usePartsState } from "../../state/DatePartsContext";
import css from "./DateParts.module.scss";
import { DatePart } from "../DatePart/DatePart";
export const DateParts: React.FC<{ location: string }> = ({ location }) => {
  const { parts } = usePartsState();
  return (
    <div className={`${css.dateParts} ${css[location]}`}>
      <div className={css.partsWrapper}>
        <header>
          <label htmlFor="">Date Parts</label>
          <input
            type="text"
            placeholder="Another Idea?"
            className={css.partInput}
          />
          <div className={css.colorInput}>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <button className={css.add}>Add</button>
        </header>
        <div className={css.partsList}>
          <div className={css.partsInner}>
            {parts.map((part) => (
              <DatePart
                key={part.id}
                location={"list"}
                part={part}
                gridIndex={part.gridIndex}
              ></DatePart>
            ))}
          </div>
        </div>
      </div>
      <div className={css.modal}></div>
    </div>
  );
};

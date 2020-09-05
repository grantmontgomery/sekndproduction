import * as React from "react";
import css from "./DateParts.module.scss";
export const DateParts: React.FC<{ location: string }> = ({ location }) => {
  return (
    <div className={css.dateParts}>
      <div className={css.partsWrapper}>
        <header>
          <label htmlFor="">Date Parts</label>
          <div className={css.colorInput}>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div>
          <input
            type="text"
            placeholder="Another Idea?"
            className={css.partInput}
          />
        </header>
        <div className={css.partsList}></div>
      </div>
      <div className={css.modal}></div>
    </div>
  );
};

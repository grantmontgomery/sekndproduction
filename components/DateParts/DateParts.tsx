import * as React from "react";
import css from "./DateParts.module.scss";
export const DateParts: React.FC<{ location: string }> = ({ location }) => {
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
        <div className={css.partsList}></div>
      </div>
      <div className={css.modal}></div>
    </div>
  );
};

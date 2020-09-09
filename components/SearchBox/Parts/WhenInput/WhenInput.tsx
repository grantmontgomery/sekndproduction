import * as React from "react";
import DatePicker from "react-datepicker";
import css from "./WhenInput.module.scss";

export const WhenInput: React.FC = () => {
  return (
    <div className={css.when}>
      <label htmlFor="">When are you meeting?</label>
      <DatePicker
        className={css.from}
        placeholderText={"Start time"}
        autoComplete="off"
        minDate={new Date()}
        dateFormat="Pp"
        showTimeSelect
      ></DatePicker>
      <DatePicker
        className={css.to}
        placeholderText={"End Time"}
        autoComplete="off"
        minDate={new Date()}
        dateFormat="Pp"
        showTimeSelect
      ></DatePicker>
    </div>
  );
};

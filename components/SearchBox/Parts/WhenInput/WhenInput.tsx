import * as React from "react";
import DatePicker from "react-datepicker";

import css from "./WhenInput.module.scss";

export const WhenInput: React.FC = () => {
  return (
    <div className={css.when}>
      <label htmlFor="">When are you meeting?</label>
      {/* <DatePicker></DatePicker>
      <DatePicker></DatePicker> */}
    </div>
  );
};

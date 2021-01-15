import * as React from "react";
import DatePicker from "react-datepicker";
import InputProps from "../../SearchBox";
import css from "./WhenInput.module.scss";

type Props = Pick<InputProps, "startDate" | "handleQueryDate" | "endDate">;

export const WhenInput: React.FC<Props> = ({
  handleQueryDate,
  startDate,
  endDate,
}) => {
  const handleDateChange: (field: string, date: Date) => void = (
    field,
    date
  ) => {
    return handleQueryDate(field, date);
  };

  const today = new Date();

  return (
    <div className={css.when}>
      <label htmlFor="">When are you meeting?</label>
      <DatePicker
        className={css.from}
        placeholderText={"Start time"}
        autoComplete="off"
        selected={startDate}
        minDate={today}
        dateFormat="Pp"
        showTimeSelect
        customInput={<input type="text" readOnly />}
        onChange={(date: Date) => handleDateChange("startDate", date)}
      ></DatePicker>
      <DatePicker
        className={css.to}
        customInput={<input type="text" readOnly />}
        placeholderText={"End Time"}
        autoComplete="off"
        minDate={startDate ? startDate : today}
        selected={endDate ? endDate : startDate}
        dateFormat="Pp"
        showTimeSelect
        onChange={(date: Date) => handleDateChange("endDate", date)}
      ></DatePicker>
    </div>
  );
};

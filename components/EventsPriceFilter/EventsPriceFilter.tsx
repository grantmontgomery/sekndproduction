import * as React from "react";
import css from "./EventsPriceFilter.module.scss";

export const EventsPriceFilter: React.FC = () => {
  const [price, setPrice] = React.useState<string>("");

  const handleSelect: (input: string) => void = (input) => {};

  return (
    <div className={css.eventsPriceWrapper}>
      <label htmlFor="">Price Range</label>
      <select name="" id="" value={price} onChange={() => handleSelect}>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  );
};

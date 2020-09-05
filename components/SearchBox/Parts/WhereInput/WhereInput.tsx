import * as React from "react";
import css from "./WhereInput.module.scss";

export const WhereInput: React.FC = () => {
  return (
    <div className={css.where}>
      <label htmlFor="">Where are you meeting?</label>
      <input type="text" placeholder="Los Angeles / 90015" />
      <select name="radius">
        <optgroup>
          <option value="">Radius...</option>
          <option value="">Within 1 mile</option>
          <option value="">Within 5 miles</option>
          <option value="">Within 10 miles</option>
          <option value="">Within 25 miles</option>
        </optgroup>
      </select>
    </div>
  );
};

import * as React from "react";
import type { InputChange } from "../../SearchBox";
import InputProps from "../../SearchBox";
import css from "./WhereInput.module.scss";

type Props = Pick<InputProps, "location" | "handleInputChange" | "radius">;

export const WhereInput: React.FC<Props> = ({
  location,
  handleInputChange,
  radius,
}) => {
  const handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => void = (event, field) => {
    return handleInputChange(
      field,
      (event.target as HTMLInputElement | HTMLSelectElement).value
    );
  };

  return (
    <div className={css.where}>
      <label htmlFor="">Where are you meeting?</label>
      <input
        type="text"
        placeholder="Los Angeles / 90015"
        value={location}
        onChange={(event) => handleChange(event, "location")}
      />
      <select
        name="radius"
        value={radius}
        onChange={(event) => handleChange(event, "radius")}
      >
        <optgroup>
          <option value="">Radius...</option>
          <option value="1610">Within 1 mile</option>
          <option value="8050">Within 5 miles</option>
          <option value="16100">Within 10 miles</option>
          <option value="40250">Within 25 miles</option>
        </optgroup>
      </select>
    </div>
  );
};

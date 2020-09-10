import * as React from "react";
import type { InputChange } from "../../SearchBox";
import InputProps from "../../SearchBox";
import css from "./WhereInput.module.scss";

type Props = Pick<InputProps, "where" | "handleInputChange" | "radius">;

export const WhereInput: React.FC<Props> = ({
  where,
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

  async function ApiTest() {
    const response = await fetch("/api/hello", {
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
      method: "POST",
      body: JSON.stringify({
        Test: "Hello this is a test",
      }),
    });

    return response;
  }

  ApiTest();
  return (
    <div className={css.where}>
      <label htmlFor="">Where are you meeting?</label>
      <input
        type="text"
        placeholder="Los Angeles / 90015"
        value={where}
        onChange={(event) => handleChange(event, "where")}
      />
      <select
        name="radius"
        value={radius}
        onChange={(event) => handleChange(event, "radius")}
      >
        <optgroup>
          <option value="">Radius...</option>
          <option value="Within 1 mile">Within 1 mile</option>
          <option value="Within 5 miles">Within 5 miles</option>
          <option value="Within 10 miles">Within 10 miles</option>
          <option value="Within 25 miles">Within 25 miles</option>
        </optgroup>
      </select>
    </div>
  );
};

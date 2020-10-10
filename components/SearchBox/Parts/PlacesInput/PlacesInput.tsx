import * as React from "react";
import InputProps from "../../SearchBox";
import css from "./PlacesInput.module.scss";

type Props = Pick<InputProps, "handleInputChange" | "placeType">;

export const PlacesInput: React.FC<Props> = ({
  handleInputChange,
  placeType,
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
    <div className={css.places}>
      <label htmlFor="">What type of places are you looking for?</label>
      <input
        placeholder="Bars, Restaurants, Sushi, etc."
        type="text"
        value={placeType}
        onChange={(event) => handleChange(event, "placeType")}
      />
    </div>
  );
};

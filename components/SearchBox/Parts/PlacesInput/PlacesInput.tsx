import * as React from "react";
import InputProps from "../../SearchBox";
import css from "./PlacesInput.module.scss";

type Props = Pick<InputProps, "handleInputChange" | "placeType">;

export const PlacesInput: React.FC<Props> = ({
  handleInputChange,
  placeType,
}) => {
  return (
    <div className={css.places}>
      <label htmlFor="">What type of places are you looking for?</label>
      <input placeholder="Bars, Restaurants, Sushi, etc." type="text" />
      <button>Search</button>
    </div>
  );
};

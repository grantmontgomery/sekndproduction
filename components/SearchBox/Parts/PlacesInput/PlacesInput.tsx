import * as React from "react";
import css from "./PlacesInput.module.scss";

export const PlacesInput: React.FC = () => {
  return (
    <div className={css.places}>
      <label htmlFor="">What type of places are you looking for?</label>
      <input placeholder="Bars, Restaurants, Sushi, etc." type="text" />
      <button>Search</button>
    </div>
  );
};

import * as React from "react";
import css from "./PlacesPrice.module.scss";

export const PlacesPrice: React.FC<{ price: any[] }> = ({ price }) => {
  return price ? (
    <div className={css.placePrice}>
      <span className={css.light}>$</span>
      <span className={price.length >= 2 ? css.light : null}>$</span>
      <span className={price.length >= 3 ? css.light : null}>$</span>
      <span className={price.length === 4 ? css.light : null}>$</span>
    </div>
  ) : null;
};

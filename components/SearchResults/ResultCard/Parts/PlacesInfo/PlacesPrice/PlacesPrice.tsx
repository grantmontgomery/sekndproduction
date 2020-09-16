import * as React from "react";
import css from "./PlacesPrice.module.scss";

export const PlacesPrice: React.FC<{ price: any[] }> = ({ price }) => {
  return price ? (
    <div className={css.placePrice}>
      <span className={css.dark}>$</span>
      <span className={price.length >= 2 ? css.dark : null}>$</span>
      <span className={price.length >= 3 ? css.dark : null}>$</span>
      <span className={price.length === 4 ? css.dark : null}>$</span>
    </div>
  ) : null;
};

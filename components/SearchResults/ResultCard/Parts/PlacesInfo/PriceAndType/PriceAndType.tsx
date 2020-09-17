import * as React from "react";
import css from "./PriceAndType.module.scss";

export const PriceAndType: React.FC<{ price: string }> = ({ price }) => {
  return price ? (
    <div className={css.placePrice}>
      <span className={css.light}>{price[0]}</span>
      <span className={price.length >= 2 ? css.light : null}>{price[0]}</span>
      <span className={price.length >= 3 ? css.light : null}>{price[0]}</span>
      <span className={price.length === 4 ? css.light : null}>{price[0]}</span>
    </div>
  ) : null;
};

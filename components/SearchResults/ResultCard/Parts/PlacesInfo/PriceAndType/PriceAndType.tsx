import * as React from "react";
import css from "./PriceAndType.module.scss";

export const PriceAndType: React.FC<{ price: string; type: string | null }> = ({
  price,
  type,
}) => {
  const singularType: () => JSX.Element | null = () => {
    if (!type || type.length === 0) return null;
    else {
      const indexLastLetter: number = type.length - 1;
      switch (type[indexLastLetter]) {
        case "s":
          return type.indexOf("ies") !== -1 ? (
            <span
              className={css.type}
              style={{ marginLeft: price ? "2vw" : null }}
            >{`${type.substring(0, type.indexOf("ies"))}y`}</span>
          ) : (
            <span
              className={css.type}
              style={{ marginLeft: price ? "2vw" : null }}
            >
              {type.substring(0, indexLastLetter)}
            </span>
          );
        default:
          return (
            <span
              className={css.type}
              style={{ marginLeft: price ? "2vw" : null }}
            >{`${type}`}</span>
          );
      }
    }
  };
  return price ? (
    <div className={css.placePrice}>
      <span className={css.light}>{price[0]}</span>
      <span className={price.length >= 2 ? css.light : null}>{price[0]}</span>
      <span className={price.length >= 3 ? css.light : null}>{price[0]}</span>
      <span className={price.length === 4 ? css.light : null}>{price[0]}</span>
      {singularType()}
    </div>
  ) : (
    <div className={css.placePrice}>{singularType()}</div>
  );
};

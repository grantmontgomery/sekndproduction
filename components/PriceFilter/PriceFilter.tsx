import * as React from "react";
import css from "./PriceFilter.module.scss";

export const PriceFilter: React.FC<{
  resultsType: string;
  handlePlacePriceChange: (input: string) => void;
}> = ({ resultsType, handlePlacePriceChange }) => {
  return (
    <div className={css.priceWrapper}>
      {resultsType === "places" ? (
        <div className={css.placePrice}>
          <div
            className={css.priceSelector}
            style={{
              borderTopLeftRadius: "35px",
              borderBottomLeftRadius: "35px",
            }}
            onClick={() => handlePlacePriceChange("1")}
          >
            <span>$</span>
          </div>
          <div
            className={css.priceSelector}
            onClick={() => handlePlacePriceChange("2")}
          >
            <span>$$</span>
          </div>
          <div
            className={css.priceSelector}
            onClick={() => handlePlacePriceChange("3")}
          >
            <span>$$$</span>
          </div>
          <div
            className={css.priceSelector}
            style={{
              borderTopRightRadius: "35px",
              borderBottomRightRadius: "35px",
            }}
            onClick={() => handlePlacePriceChange("4")}
          >
            <span>$$$$</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

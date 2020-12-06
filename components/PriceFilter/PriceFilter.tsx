import * as React from "react";
import css from "./PriceFilter.module.scss";

export const PriceFilter: React.FC<{ resultsType: string }> = ({
  resultsType,
}) => {
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
          >
            <span>$</span>
          </div>
          <div className={css.priceSelector}>
            <span>$$</span>
          </div>
          <div className={css.priceSelector}>
            <span>$$$</span>
          </div>
          <div
            className={css.priceSelector}
            style={{
              borderTopRightRadius: "35px",
              borderBottomRightRadius: "35px",
            }}
          >
            <span>$$$$</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

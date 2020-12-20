import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import * as React from "react";
import css from "./PriceFilter.module.scss";

export const PriceFilter: React.FC<{
  resultsType: string;
  handlePlacePriceChange: (input: string) => void;
}> = ({ resultsType, handlePlacePriceChange }) => {
  const [price, setPrice] = React.useState<number | null>(null);

  React.useEffect(() => {
    setPrice(null);
  }, [resultsType]);

  const handleSelect: (input: string) => void = (input) => {
    if (price !== parseInt(input)) {
      handlePlacePriceChange(input);
      setPrice(parseInt(input));
    } else {
      handlePlacePriceChange(null);
      setPrice(null);
    }
  };

  return (
    <div className={css.priceWrapper}>
      {resultsType === "places" ? (
        <div className={css.placePrice}>
          <div
            className={`${css.priceSelector} ${
              price === 1 ? css.selected : null
            }`}
            style={{
              borderTopLeftRadius: "35px",
              borderBottomLeftRadius: "35px",
            }}
            onClick={() => handleSelect("1")}
          >
            <span>$</span>
          </div>
          <div
            className={`${css.priceSelector} ${
              price === 2 ? css.selected : null
            }`}
            onClick={() => handleSelect("2")}
          >
            <span>$$</span>
          </div>
          <div
            className={`${css.priceSelector} ${
              price === 3 ? css.selected : null
            }`}
            onClick={() => handleSelect("3")}
          >
            <span>$$$</span>
          </div>
          <div
            className={`${css.priceSelector} ${
              price === 4 ? css.selected : null
            }`}
            style={{
              borderTopRightRadius: "35px",
              borderBottomRightRadius: "35px",
            }}
            onClick={() => handleSelect("4")}
          >
            <span>$$$$</span>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

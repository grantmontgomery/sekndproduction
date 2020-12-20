import * as React from "react";
import css from "./PriceFilter.module.scss";

export const PlacesPriceFilter: React.FC<{
  handlePlacePriceChange: (input: string) => void;
}> = ({ handlePlacePriceChange }) => {
  const [price, setPrice] = React.useState<number | null>(null);

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
    <div className={css.placePriceWrapper}>
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
    </div>
  );
};

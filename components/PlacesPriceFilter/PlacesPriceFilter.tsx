import * as React from "react";
import css from "./PlacesPriceFilter.module.scss";

export const PlacesPriceFilter: React.FC<{
  handlePriceChange: (input: string) => void;
  closeMobileFilters?: () => void;
  location: "mobileWidget" | "desktopSection";
  globalPlacePrice?: string;
}> = ({
  handlePriceChange,
  closeMobileFilters,
  location,
  globalPlacePrice,
}) => {
  const [price, setPrice] = React.useState<number | null>(
    location === "mobileWidget" && globalPlacePrice
      ? parseInt(globalPlacePrice)
      : null
  );

  console.log(globalPlacePrice);

  const handleSelect: (input: string) => void = (input) => {
    if (price !== parseInt(input)) {
      handlePriceChange(input);
      setPrice(parseInt(input));
      if (closeMobileFilters) closeMobileFilters();
    } else {
      handlePriceChange(null);
      setPrice(null);
      if (closeMobileFilters) closeMobileFilters();
    }
  };

  return (
    <div className={`${css.placePriceWrapper} ${css[location]}`}>
      <div className={css.placePrice}>
        <div
          className={`${css.priceSelector} ${
            price === 1 ? css.selected : undefined
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
            price === 2 ? css.selected : undefined
          }`}
          onClick={() => handleSelect("2")}
        >
          <span>$$</span>
        </div>
        <div
          className={`${css.priceSelector} ${
            price === 3 ? css.selected : undefined
          }`}
          onClick={() => handleSelect("3")}
        >
          <span>$$$</span>
        </div>
        <div
          className={`${css.priceSelector} ${
            price === 4 ? css.selected : undefined
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

import * as React from "react";
import css from "./PlacesPriceFilter.module.scss";

export const PlacesPriceFilter: React.FC<{
  handlePriceChange: (input: string) => void;
  closeMobileFilters?: () => void;
  location: "mobileWidget" | "desktopSection";
}> = ({ handlePriceChange, closeMobileFilters, location }) => {
  const [price, setPrice] = React.useState<number | null>(null);

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

  // React.useEffect(() => {
  //   handlePriceChange(null);
  // }, []);

  return (
    <div className={`${css.placePriceWrapper} ${css[location]}`}>
      <div className={css.placePrice}>
        <div
          className={`${css.priceSelector} ${price === 1 && css.selected}`}
          style={{
            borderTopLeftRadius: "35px",
            borderBottomLeftRadius: "35px",
          }}
          onClick={() => handleSelect("1")}
        >
          <span>$</span>
        </div>
        <div
          className={`${css.priceSelector} ${price === 2 && css.selected}`}
          onClick={() => handleSelect("2")}
        >
          <span>$$</span>
        </div>
        <div
          className={`${css.priceSelector} ${price === 3 && css.selected}`}
          onClick={() => handleSelect("3")}
        >
          <span>$$$</span>
        </div>
        <div
          className={`${css.priceSelector} ${price === 4 && css.selected}`}
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

import * as React from "react";
import css from "./EventsPriceFilter.module.scss";

export const EventsPriceFilter: React.FC<{
  handlePriceChange: (input: string | null) => void;
}> = ({ handlePriceChange }) => {
  const [price, setPrice] = React.useState<string | null>(undefined);

  const handleSelect: (input: string) => void = (input) => {
    setPrice(input);
    handlePriceChange(input);
  };

  React.useEffect(() => {
    handlePriceChange(undefined);
  }, []);

  return (
    <div className={css.eventsPriceWrapper}>
      {/* <label htmlFor="">Price Range</label> */}
      <select
        name=""
        id=""
        value={price}
        onChange={({ target }) => handleSelect(target.value)}
      >
        <option value={undefined}>Max Price (optional)</option>
        <option value="Free">Free</option>
        <option value="25">$25</option>
        <option value="50">$50</option>
        <option value="100">$100</option>
      </select>
    </div>
  );
};

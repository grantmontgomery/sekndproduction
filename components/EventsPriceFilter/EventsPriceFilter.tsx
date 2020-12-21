import * as React from "react";
import css from "./EventsPriceFilter.module.scss";

export const EventsPriceFilter: React.FC<{
  handlePriceChange: (input: string | null) => void;
}> = ({ handlePriceChange }) => {
  const [price, setPrice] = React.useState<string | null>(null);

  const handleSelect: (input: string) => void = (input) => {
    setPrice(input);
    handlePriceChange(input);
  };

  React.useEffect(() => {
    handlePriceChange(null);
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
        <option value={null}>Select Price Range (optional)</option>
        <option value="Free">Free</option>
        <option value="25">Under $25</option>
        <option value="50">$25 to $50</option>
        <option value="100">$50 to $100</option>
        <option value="1000">$100+</option>
      </select>
    </div>
  );
};

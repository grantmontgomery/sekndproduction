import * as React from "react";
import css from "./MobileFilter.module.scss";

export const MobileFilter: React.FC<{
  filterType: "Price" | "test";
  toggleFunction: (input: "Price" | "test") => void;
  priceState: string | null;
}> = ({ toggleFunction, filterType, priceState }) => {
  return (
    <div
      className={`${css.filterWrapper} ${
        priceState ? css.selected : undefined
      }`}
      onClick={() => toggleFunction(filterType)}
    >
      {priceState ? new String(`$`).repeat(parseInt(priceState)) : filterType}
    </div>
  );
};

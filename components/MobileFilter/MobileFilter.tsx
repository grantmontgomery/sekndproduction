import * as React from "react";
import css from "./MobileFilter.module.scss";

export const MobileFilter: React.FC<{
  filterType: string;
  toggleFunction: (input: string) => void;
  priceState: string | null;
}> = ({ toggleFunction, filterType, priceState }) => {
  return (
    <div
      className={css.filterWrapper}
      style={{ background: priceState ? "#0072ff" : "white" }}
      onClick={() => toggleFunction(filterType)}
    >
      {priceState ? priceState : filterType}
    </div>
  );
};

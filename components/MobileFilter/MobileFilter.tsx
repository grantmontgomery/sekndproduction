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
      style={{
        background: priceState ? "#0072ff" : "white",
        border: !priceState && "solid 1px black",
      }}
      onClick={() => toggleFunction(filterType)}
    >
      {priceState ? new String(`$`).repeat(parseInt(priceState)) : filterType}
    </div>
  );
};

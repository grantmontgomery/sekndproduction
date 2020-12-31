import * as React from "react";
import css from "./MobileFilter.module.scss";

export const MobileFilter: React.FC<{
  filterType: string;
  toggleFunction: (input: string) => void;
}> = ({ toggleFunction, filterType }) => {
  return (
    <div
      className={css.filterWrapper}
      onClick={() => toggleFunction(filterType)}
    ></div>
  );
};

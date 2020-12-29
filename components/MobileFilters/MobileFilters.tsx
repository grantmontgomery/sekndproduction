import * as React from "react";
import css from "./MobileFilters.module.scss";

export const MobileFilters: React.FC<{ children?: React.ReactChildren }> = ({
  children,
}) => {
  return <div className={css.mobileFiltersWrapper}></div>;
};

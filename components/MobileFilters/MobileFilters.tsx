import * as React from "react";
import css from "./MobileFilters.module.scss";

export const MobileFilters: React.FC<{
  children?: React.ReactChildren;
  mobileFilters: boolean;
}> = ({ children, mobileFilters }) => {
  const [appear, setAppear] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => setAppear(true), 1);
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div
      className={`${css.mobileFiltersWrapper} ${
        !mobileFilters ? css.slideDown : null
      } ${appear ? css.slideUp : null}`}
    ></div>
  );
};

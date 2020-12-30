import * as React from "react";
import css from "./MobileFilters.module.scss";

export const MobileFilters: React.FC<{
  children?: React.ReactChildren;
  mobileFilters: { price: boolean };
  closeModalFilters: () => void;
}> = ({ children, mobileFilters, closeModalFilters }) => {
  const [appear, setAppear] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => setAppear(true), 1);
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <React.Fragment>
      {Object.values(mobileFilters).some((filter) => filter === true) ? (
        <div className={css.modalDark} onClick={closeModalFilters}></div>
      ) : null}

      <div
        className={`${css.mobileFiltersWrapper} ${
          Object.values(mobileFilters).some((value) => value === false)
            ? css.slideDown
            : null
        } ${appear ? css.slideUp : null}`}
      >
        <div className={css.exit} onClick={closeModalFilters}>
          X
        </div>
      </div>
    </React.Fragment>
  );
};

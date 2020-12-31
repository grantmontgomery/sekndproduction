import * as React from "react";
import css from "./MobileFiltersWidget.module.scss";

export const MobileFiltersWidget: React.FC<{
  mobileFilters: string;
  closeModalFilters: () => void;
}> = ({ mobileFilters, closeModalFilters, children }) => {
  const [appear, setAppear] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => setAppear(true), 1);
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <React.Fragment>
      <div
        className={`${css.modalDark}`}
        style={{
          opacity: appear && mobileFilters != "" ? "0.5" : "0",
        }}
        onClick={closeModalFilters}
      ></div>

      <div
        className={css.mobileFiltersWrapper}
        style={{
          transform: `translate(0, ${
            appear && mobileFilters != "" ? "0" : "100%"
          })`,
        }}
      >
        <div className={css.exit} onClick={closeModalFilters}>
          X
        </div>
        {children}
      </div>
    </React.Fragment>
  );
};

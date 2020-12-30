import * as React from "react";
import { MobileFilters } from "./MobileFilters";

export const RenderWrapper: React.FC<{
  mobileFilters: { price: boolean };
  closeModalFilters: () => void;
}> = ({ mobileFilters, closeModalFilters, children }) => {
  const [render, setRender] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (Object.values(mobileFilters).some((value) => value === true)) {
      setRender(true);
    } else {
      setTimeout(() => {
        setRender(false);
      }, 250);
    }
  }, [mobileFilters]);

  React.useEffect(() => {
    return clearTimeout();
  }, []);

  return (
    <React.Fragment>
      {render ? (
        <MobileFilters
          mobileFilters={mobileFilters}
          closeModalFilters={closeModalFilters}
        >
          {children}
        </MobileFilters>
      ) : null}
    </React.Fragment>
  );
};

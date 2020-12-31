import * as React from "react";
import { MobileFiltersWidget } from "./MobileFiltersWidget";

export const RenderWrapper: React.FC<{
  mobileFilters: string;
  closeModalFilters: () => void;
}> = ({ mobileFilters, closeModalFilters, children }) => {
  const [render, setRender] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (mobileFilters != "") {
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
        <MobileFiltersWidget
          mobileFilters={mobileFilters}
          closeModalFilters={closeModalFilters}
        >
          {children}
        </MobileFiltersWidget>
      ) : null}
    </React.Fragment>
  );
};

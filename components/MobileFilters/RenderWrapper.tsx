import * as React from "react";
import { MobileFilters } from "./MobileFilters";

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

import * as React from "react";
import { MobileFilters } from "./MobileFilters";

export const RenderWrapper: React.FC<{ mobileFilters: boolean }> = ({
  mobileFilters,
}) => {
  const [render, setRender] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (mobileFilters) {
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
        <MobileFilters mobileFilters={mobileFilters}></MobileFilters>
      ) : null}
    </React.Fragment>
  );
};

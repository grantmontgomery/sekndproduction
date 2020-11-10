import * as React from "react";

export const SelectFeature: React.FC = () => {
  const [elements, loadElements] = React.useState<boolean>(false);
  React.useEffect(() => {
    setTimeout(() => loadElements(true), 250);
    return clearTimeout;
  }, []);
  return (
    <React.Fragment>
      <h2>2. Select</h2>
    </React.Fragment>
  );
};

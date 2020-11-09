import * as React from "react";

export const SearchFeature: React.FC = () => {
  const [elements, loadElements] = React.useState<boolean>(false);
  React.useEffect(() => {
    loadElements(true);
  }, []);
  if (elements) {
    return (
      <React.Fragment>
        <div style={{ background: "red", height: "5vh", width: "5vh" }}></div>
      </React.Fragment>
    );
  }
};

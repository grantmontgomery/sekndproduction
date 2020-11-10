import * as React from "react";
import css from "./SelectFeature.module.scss";

export const SelectFeature: React.FC = () => {
  const [elements, loadElements] = React.useState<boolean>(false);
  React.useEffect(() => {
    setTimeout(() => loadElements(true), 250);
    return clearTimeout;
  }, []);
  return (
    <React.Fragment>
      <h2
        className={css.title}
        style={{
          opacity: elements ? "1" : "0",
          transform: `translate(${elements ? "0" : "-10%"})`,
        }}
      >
        2. Select
      </h2>
      <div
        className={css.mobileImageWrapper}
        style={{
          transitionDelay: "125ms",
          opacity: elements ? "1" : "0",
          transform: `translate(0, ${elements ? "0" : "10%"})`,
        }}
      >
        <img
          style={{ opacity: elements ? "1" : "0" }}
          src="/images/MobilePlaceExampleCard.png"
          alt=""
        />
      </div>
      <div
        className={css.mobileImageWrapper}
        style={{
          transitionDelay: "250ms",
          opacity: elements ? "1" : "0",
          transform: `translate(0, ${elements ? "0" : "10%"})`,
          marginTop: "2vh",
        }}
      >
        <img src="/images/MobileEventExampleCard.png" alt="" />
      </div>
    </React.Fragment>
  );
};

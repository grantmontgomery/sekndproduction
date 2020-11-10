import * as React from "react";
import css from "./ScheduleFeature.module.scss";

export const ScheduleFeature: React.FC = () => {
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
        3. Schedule
      </h2>
    </React.Fragment>
  );
};

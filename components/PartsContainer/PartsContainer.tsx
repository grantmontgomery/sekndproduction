import * as React from "react";
import css from "./PartsContainer.module.scss";

export const PartsContainer: React.FC = () => {
  const [extend, setExtend] = React.useState<boolean>(false);

  return (
    <section className={css.partsContainer}>
      <svg>
        <path d="M150 0 L0 200 L150 200 Z"></path>
      </svg>
    </section>
  );
};

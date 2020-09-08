import * as React from "react";

import css from "./WhenInput.module.scss";

export const WhenInput: React.FC = () => {
  return (
    <div className={css.when}>
      <label htmlFor="">When are you meeting?</label>
    </div>
  );
};

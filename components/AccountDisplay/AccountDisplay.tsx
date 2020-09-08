import * as React from "react";
import css from "./AccountDisplay.module.scss";

export const AccountDisplay: React.FC = () => {
  const [state, setState] = React.useState<{ loggedIn: boolean }>({
    loggedIn: false,
  });
  return (
    <div className={css.accountDisplay}>
      <span> {state.loggedIn ? "Grant" : "Sign In"}</span>
    </div>
  );
};

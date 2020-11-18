import * as React from "react";
import css from "./SignInModal.module.scss";

export const SignInModal: React.FC = () => {
  const [mode, setMode] = React.useState<string>("signin");

  return (
    <div className={css.signInWrapper}>
      <div className={css.signInSelector}>
        <span>Sign in</span>
        <span>Sign up</span>
      </div>
      <input type="text" placeholder="Username or Email" name="" id="" />
      <input type="password" placeholder="Password" />
      <span className={css.rememberPassword}>
        <input type="checkbox" /> Remember Password
      </span>
      <span className={css.loginButton}>Log in</span>
    </div>
  );
};

import * as React from "react";
import css from "./SignInModal.module.scss";

export const SignInModal: React.FC = () => {
  return (
    <div className={css.signInWrapper}>
      <input type="text" placeholder="Username or Email" name="" id="" />
      <input type="password" placeholder="Password" />
      <span className={css.loginButton}>Log in</span>
    </div>
  );
};

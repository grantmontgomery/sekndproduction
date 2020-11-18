import * as React from "react";
import css from "./SignInModal.module.scss";

export const SignInModal: React.FC = () => {
  const [mode, setMode] = React.useState<string>("signin");

  return (
    <div className={css.signInWrapper}>
      <div className={css.signInSelector}>
        <span
          onClick={() => setMode("signin")}
          style={{
            borderBottom: mode === "signin" ? "1px solid black" : "none",
          }}
        >
          Sign in
        </span>
        <span
          onClick={() => setMode("register")}
          style={{
            borderBottom: mode === "register" ? "1px solid black" : "none",
          }}
        >
          Register
        </span>
      </div>
      {mode === "signin" ? (
        <React.Fragment>
          <input type="text" placeholder="Username or Email" name="" id="" />
          <input type="password" placeholder="Password" />
          <span className={css.rememberPassword}>
            <input type="checkbox" />
            Remember Password
          </span>
          <span className={css.loginButton}>Log in</span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input type="text" placeholder="Username" name="" id="" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <span className={css.registerButton}>Register</span>
        </React.Fragment>
      )}
    </div>
  );
};

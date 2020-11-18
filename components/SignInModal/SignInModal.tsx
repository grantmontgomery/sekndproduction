import { stringify } from "querystring";
import * as React from "react";
import css from "./SignInModal.module.scss";

export const SignInModal: React.FC = () => {
  const [mode, setMode] = React.useState<string>("signin");
  const [signInFields, setSignIn] = React.useState<{
    user: string;
    password: string;
  }>({ user: "", password: "" });
  const [registerFields, setRegister] = React.useState<{
    username: string;
    email: string;
    password: string;
  }>({ username: "", email: "", password: "" });
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
          <input
            type="text"
            placeholder="Username or Email"
            name=""
            id=""
            value={signInFields.user}
            onChange={({ target }) =>
              setSignIn((fields) => ({ ...fields, user: target.value }))
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={signInFields.password}
            onChange={({ target }) =>
              setSignIn((fields) => ({ ...fields, password: target.value }))
            }
          />
          <span className={css.rememberPassword}>
            <input type="checkbox" />
            Remember Password
          </span>
          <span className={css.loginButton}>Log in</span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            type="text"
            placeholder="Username"
            name=""
            id=""
            value={registerFields.username}
            onChange={({ target }) =>
              setRegister((fields) => ({ ...fields, username: target.value }))
            }
          />
          <input
            type="text"
            placeholder="Email"
            value={registerFields.email}
            onChange={({ target }) =>
              setRegister((fields) => ({ ...fields, email: target.value }))
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={registerFields.password}
            onChange={({ target }) =>
              setRegister((fields) => ({ ...fields, password: target.value }))
            }
          />
          <span className={css.registerButton}>Register</span>
        </React.Fragment>
      )}
    </div>
  );
};

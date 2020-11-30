import * as React from "react";
import css from "./SignInModal.module.scss";
import { useLogIn } from "./Hooks";
import Cookie from "js-cookie";
const cookie = require("cookie");

export const SignInModal: React.FC = () => {
  const [mode, setMode] = React.useState<string>("signin");
  const [logInFields, setLogIn] = React.useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });
  const [registerFields, setRegister] = React.useState<{
    username: string;
    name: string;
    email: string;
    password: string;
  }>({ username: "", email: "", password: "", name: "" });

  const { loading, logIn } = useLogIn();

  console.log(loading);

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
            value={logInFields.username}
            onChange={({ target }) =>
              setLogIn((fields) => ({ ...fields, username: target.value }))
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={logInFields.password}
            onChange={({ target }) =>
              setLogIn((fields) => ({ ...fields, password: target.value }))
            }
          />
          <span className={css.rememberPassword}>
            <input type="checkbox" />
            Remember Password
          </span>
          <span className={css.loginButton} onClick={() => logIn(logInFields)}>
            Log in
          </span>
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
            type="name"
            placeholder="Name"
            value={registerFields.name}
            onChange={({ target }) =>
              setRegister((fields) => ({ ...fields, name: target.value }))
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

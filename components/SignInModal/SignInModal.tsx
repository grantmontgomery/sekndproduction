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

  const { loading, logIn, logOut } = useLogIn();

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
          <label htmlFor="Username or Email">Username or Email</label>
          <input
            type="text"
            placeholder="Enter username or email"
            name="Username or Email"
            id=""
            value={logInFields.username}
            onChange={({ target }) =>
              setLogIn((fields) => ({ ...fields, username: target.value }))
            }
          />
          <label htmlFor="Password">Password</label>

          <input
            type="password"
            name="Password"
            placeholder="Enter password"
            value={logInFields.password}
            onChange={({ target }) =>
              setLogIn((fields) => ({ ...fields, password: target.value }))
            }
          />

          <span className={css.loginButton} onClick={() => logIn(logInFields)}>
            {loading ? (
              <div className={css.loadingRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              "Log In"
            )}
          </span>
          <span className={css.loginButton} onClick={() => logOut()}>
            Log Out
          </span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            placeholder="Enter in a username"
            name="Username"
            id="Username"
            value={registerFields.username}
            onChange={({ target }) =>
              setRegister((fields) => ({ ...fields, username: target.value }))
            }
          />
          <label htmlFor="Name">Name</label>

          <input
            type="name"
            name="Name"
            placeholder="Enter in a name"
            value={registerFields.name}
            onChange={({ target }) =>
              setRegister((fields) => ({ ...fields, name: target.value }))
            }
          />
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            placeholder="Enter in an email"
            value={registerFields.email}
            onChange={({ target }) =>
              setRegister((fields) => ({ ...fields, email: target.value }))
            }
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="Password"
            placeholder="Enter in a password"
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

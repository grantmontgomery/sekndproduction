import * as React from "react";
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";
import css from "./SignInModal.module.scss";

const SignUpMutation = gql`
  mutation($username: String!, $name: String!, $password: String!) {
    addUser(username: $username, password: $password, name: $name) {
      serverStatus
    }
  }
`;

const LogInQuery = gql`
  query($username: String!, $password: String!) {
    logInUser(username: $username, password: $password) {
      name
    }
  }
`;

export const SignInModal: React.FC = () => {
  const [mode, setMode] = React.useState<string>("signin");
  const [signInFields, setSignIn] = React.useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });
  const [registerFields, setRegister] = React.useState<{
    username: string;
    name: string;
    email: string;
    password: string;
  }>({ username: "", email: "", password: "", name: "" });

  const [
    submit,
    {
      called: registerCalled,
      loading: registerLoading,
      data: registerData,
      error: registerError,
    },
  ] = useMutation(SignUpMutation, {
    variables: {
      password: registerFields.password,
      name: registerFields.name,
      username: registerFields.username,
    },
  });

  const [
    login,
    {
      called: logInCalled,
      loading: logInLoading,
      data: loginData,
      error: logInError,
    },
  ] = useLazyQuery(LogInQuery, {
    variables: {
      username: signInFields.username,
      password: signInFields.password,
    },
  });

  React.useEffect(() => {
    console.log(registerCalled);
    if (registerCalled) {
      if (!registerLoading) {
        console.log(registerFields);
        registerData === undefined
          ? console.log(registerError)
          : console.log(registerData);
      }
    }
  }, [registerCalled, registerLoading]);

  React.useEffect(() => {
    if (logInCalled) {
      if (!logInLoading) {
        loginData === undefined
          ? console.log(logInError)
          : console.log(loginData);
      }
    }
  }, [logInCalled, logInLoading]);

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
            value={signInFields.username}
            onChange={({ target }) =>
              setSignIn((fields) => ({ ...fields, username: target.value }))
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
          <span className={css.loginButton} onClick={() => login()}>
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
          <span className={css.registerButton} onClick={() => submit()}>
            Register
          </span>
        </React.Fragment>
      )}
    </div>
  );
};

import * as React from "react";
import Cookie from "js-cookie";

import { handleCookies } from "../../../logic";
import { useUserDispatch } from "../../../state/UserContext";

export const useLogIn: () => {
  loading: boolean;
  logIn: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<void>;
  logOut: () => void;
} = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const userDispatch = useUserDispatch();

  const url: string =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/handleAuth"
      : "https://d34hjxtv8xi8je.cloudfront.net";

  const logOut: () => void = () => {
    Cookie.remove("refresh-token", {
      path: "/",
      domain: "localhost",
    });
    fetch(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/handleAuth"
        : "",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Cookie: "",
        },
        method: "POST",
        body: JSON.stringify({
          method: "log-out",
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
    userDispatch({ type: "LOG_OUT" });
  };

  const logIn: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<void> = async ({ username, password }) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          method: "log-in",
          username,
          password,
        }),
      });
      const responseJSON = await response.json();
      setLoading(false);

      if (responseJSON.username)
        userDispatch({ type: "SET_USER", payload: responseJSON });
    } catch (error) {
      setLoading(false);
    }
  };

  return { loading, logIn, logOut };
};

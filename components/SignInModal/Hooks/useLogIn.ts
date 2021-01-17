import * as React from "react";
import Cookies from "js-cookie";
import { NextRouter, useRouter } from "next/router";

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

  const router: NextRouter = useRouter();
  const userDispatch = useUserDispatch();

  const url: string =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/handleAuth"
      : "https://sekndapp.com/api/handleAuth";

  const logOut: () => void = () => {
    Cookies.remove("refresh-token", {
      path: "/",
      domain: "localhost",
    });
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cookies: "",
      },
      method: "POST",
      body: JSON.stringify({
        auth: "log-out",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/");
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
          auth: "log-in",
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

import * as React from "react";
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
  data: {} | null;
} = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any | null>(null);

  const userDispatch = useUserDispatch();

  const url: string =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/handleAuth"
      : "";
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
      setData(responseJSON);
    } catch (error) {
      setLoading(false);
      setData(error);
    }
  };

  return { loading, logIn, data };
};

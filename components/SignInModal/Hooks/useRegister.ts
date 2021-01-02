import * as React from "react";
import { useUserDispatch } from "../../../state/UserContext";

export const useRegister: () => {
  loading: boolean;
  register: ({
    username,
    name,
    password,
  }: {
    username: string;
    name: string;
    password: string;
  }) => Promise<any>;
} = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const userDispatch = useUserDispatch();
  const url: string =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/handleUser"
      : "https://sekndapp.com/api/handleUser";

  const register: ({
    username,
    name,
    password,
  }: {
    username: string;
    name: string;
    password: string;
  }) => Promise<any> = async ({ username, name, password }) => {
    setLoading(true);
    try {
      console.log(username);
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username,
          password,
          name,
        }),
      });

      const responseJSON = await response.json();

      setLoading(false);

      responseJSON.username &&
        userDispatch({ type: "SET_USER", payload: responseJSON });
    } catch (error) {
      setLoading(false);

      return error;
    }
  };
  return { loading, register };
};

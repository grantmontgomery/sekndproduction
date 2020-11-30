import * as React from "react";
import { useUserDispatch } from "../../../state/UserContext";

export const useLogIn = (fields, token) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any | null>(null);

  const userDispatch = useUserDispatch();
  React.useEffect(() => {
    if (typeof data === "object") {
      console.log(data);
    }
  }, [data]);
  const url: string =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/handleAuth"
      : "";
  const signIn: (fields) => Promise<void> = async (fields) => {
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
          ...fields,
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

  return { loading, signIn };
};

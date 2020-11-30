import * as React from "react";

export const useLogIn = (fields, token) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data];
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
          ...fields,
        }),
      });
      const responseJSON = await response.json();

      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  return { loading, signIn };
};

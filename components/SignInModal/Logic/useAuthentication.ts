import * as React from "react";

export const useAuthentication = (fields, token) => {
  const [authLoading, setLoading] = React.useState<boolean>(false);
  const [authCalled, setCall] = React.useState<boolean>(false);

  const signOut: (token) => Promise<void> = async (token) => {
    try {
    } catch {}
  };

  const signIn: (fields, token) => Promise<void> = async (fields, id) => {
    setLoading(true);
    setCall(true);
    try {
      if (token) setLoading(false);
      setCall(false);
    } catch {
      setLoading(false);
      setCall(false);
    }
  };

  return { authLoading, authCalled };
};

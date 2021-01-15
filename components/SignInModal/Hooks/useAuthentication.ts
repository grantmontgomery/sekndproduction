import * as React from "react";

export const useAuthentication = (fields: any, token: any) => {
  const [authLoading, setLoading] = React.useState<boolean>(false);
  const [authCalled, setCall] = React.useState<boolean>(false);

  const signOut: (token: any) => Promise<void> = async (token) => {
    try {
    } catch {}
  };

  const signIn: (fields: any, token: any) => Promise<void> = async (
    fields,
    id
  ) => {
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

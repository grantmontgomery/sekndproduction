import * as React from "react";
import { Layout } from "../../components";
import { useUserState } from "../../state/UserContext";
import { NextRouter, useRouter } from "next/router";

export default function AccountPage(): JSX.Element {
  const router: NextRouter = useRouter();
  const [correctUser, checkUser] = React.useState<boolean | null>(null);
  const { user } = useUserState();
  React.useEffect(() => {
    if (user) {
      router.query.account === user.username
        ? checkUser(true)
        : checkUser(false);
    } else {
      checkUser(false);
    }
  }, []);

  const determineColor: () => string = () => {
    return correctUser ? "green" : "red";
  };

  return (
    <Layout>
      <div
        style={{
          height: "50vh",
          width: "80vw",
          background: correctUser === null ? "yellow" : determineColor(),
        }}
      ></div>
    </Layout>
  );
}

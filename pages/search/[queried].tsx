import * as React from "react";
import { Layout } from "../../components";
import { useRouter } from "next/router";

export default function Queried() {
  const router = useRouter();
  const { queried } = router.query;
  return (
    <React.Fragment>
      <Layout></Layout>
      <main>{queried}</main>
    </React.Fragment>
  );
}

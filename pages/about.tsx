import * as React from "react";
import { Layout } from "../components";

export default function About() {
  console.log("dest deploy");
  return (
    <React.Fragment>
      <Layout></Layout>
      <div>My about page</div>
    </React.Fragment>
  );
}

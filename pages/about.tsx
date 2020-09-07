import * as React from "react";
import { Layout } from "../components";

export default function About() {
  console.log("dest deploy");
  return (
    <React.Fragment>
      <Layout></Layout>
      <main>My about page</main>
    </React.Fragment>
  );
}

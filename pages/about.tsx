import * as React from "react";
import { usePartsState } from "../state/DatePartsContext";
import { Layout } from "../components";

export default function About() {
  const state = usePartsState();
  console.log(state);
  return (
    <Layout>
      <main>My about page</main>
    </Layout>
  );
}

import * as React from "react";
import { Layout, ResultCard } from "../components";

export default function About() {
  return (
    <Layout>
      <main>
        <ResultCard resultsLoading={true}></ResultCard>
      </main>
    </Layout>
  );
}

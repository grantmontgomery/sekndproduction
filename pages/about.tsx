import * as React from "react";
import { Layout, ResultCard, DatePart } from "../components";

export default function About() {
  return (
    <Layout>
      <main>
        <DatePart
          gridIndex={null}
          part={{ bruh: "haha" }}
          location={"nowhere"}
        ></DatePart>
      </main>
    </Layout>
  );
}

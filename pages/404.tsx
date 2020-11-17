import * as React from "react";
import css from "../styles/404.module.scss";
import { Layout } from "../components";
import Link from "next/link";

export default function Custom404(): JSX.Element {
  return (
    <Layout>
      <main className={css.errorPage}>
        <section>
          <h1>Oops!</h1>
          <h2>This page doesn't exist.</h2>
        </section>
      </main>
    </Layout>
  );
}

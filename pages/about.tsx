import * as React from "react";
import css from "../styles/About.module.scss";
import { Layout, ResultCard, DatePart } from "../components";

export default function About() {
  return (
    <Layout>
      <main className={css.pageContainer}>
        <section className={css.description}>
          <h1>Less Time Looking, More Second Dates</h1>
          <p>
            The past decade has defined the era of matchmaking apps and has made
            meeting new people fast and convenient. But the convenience and
            simplicity ends once you match with someone and the questions comes
            up, "What should I plan for the first date?". What started out as a
            simple React Application has turned in to creating the first "date
            making" app and helping others solve that question with the same
            simplicity and convenience which brought them together in the first
            place.
          </p>
          <p className={css.builtWith}>
            Built with TypeScript, Next.js, and Sass
          </p>
          <p className={css.deployedWith}>Deployed with Severless and AWS</p>

          <a href="https://grantcreates.com" target="_blank">
            <p className={css.createdBy}>Created by Grant</p>
          </a>
        </section>

        <section className={css.links}></section>
      </main>
    </Layout>
  );
}

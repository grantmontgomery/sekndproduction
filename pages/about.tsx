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

        <section className={css.links}>
          <a
            className={css.aboutLink}
            href="https://github.com/grantmontgomery/sekndproduction"
            target="_blank"
          >
            <span>See the code</span>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub icon</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </section>
      </main>
    </Layout>
  );
}

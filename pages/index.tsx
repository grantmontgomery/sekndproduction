import * as React from "react";
import Head from "next/head";
import { Layout } from "../components";
import css from "../styles/Home.module.scss";
import styles from "../styles/Home.module.css";
import { useGridState } from "../state/SearchGridContext";

export default function Home(): JSX.Element {
  const [scroll, indicateScroll] = React.useState<boolean>(true);
  const observer: React.MutableRefObject<
    IntersectionObserver | undefined
  > = React.useRef();

  React.useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio < 0.9) indicateScroll(false);
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );
    observer.current.observe(document.getElementById("introductionSection"));
  }, []);
  return (
    <Layout>
      <main className={css.homePage}>
        <section className={css.introduction} id="introductionSection">
          <h1>
            You've got the match,
            <br /> now set the perfect date.
          </h1>
          <div className={css.imagesWrapper}>
            <img src="/images/Laptop.png" alt="" />
            <img src="/images/Phone.png" alt="" />
          </div>
          <div
            className={css.scrollIndicator}
            style={{ opacity: scroll ? "1" : "0" }}
          >
            <h2>Get started</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.24 78.36">
              <title>Asset 1</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <polygon points="74.12 78.36 0 4.24 4.24 0 74.12 69.88 144 0 148.24 4.24 74.12 78.36" />
                </g>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.24 78.36">
              <title>Asset 1</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <polygon points="74.12 78.36 0 4.24 4.24 0 74.12 69.88 144 0 148.24 4.24 74.12 78.36" />
                </g>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.24 78.36">
              <title>Asset 1</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <polygon points="74.12 78.36 0 4.24 4.24 0 74.12 69.88 144 0 148.24 4.24 74.12 78.36" />
                </g>
              </g>
            </svg>
          </div>
        </section>
        <section className={css.featureSection}>
          <h1>Search</h1>
        </section>
        <section className={css.featureSection}>
          <div className={css.imageWrapper}></div>
          <h1>Select</h1>
        </section>
        <section className={css.featureSection}>
          <div className={css.imageWrapper}>
            <h1>Schedule</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}

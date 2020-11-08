import Head from "next/head";
import { Layout } from "../components";
import css from "../styles/Home.module.scss";
import styles from "../styles/Home.module.css";
import { useGridState } from "../state/SearchGridContext";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main className={css.homePage}>
        <section className={css.introduction}>
          <h1>
            You've got the match,
            <br /> now set the perfect date.
          </h1>
          <div className={css.imagesWrapper}>
            <img src="/images/Laptop.png" alt="" />
            <img src="/images/Phone.png" alt="" />
          </div>
          <div className={css.scrollIndicator}>
            <h2>Get started</h2>
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

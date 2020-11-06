import Head from "next/head";
import { Layout } from "../components";
import css from "../styles/Home.module.scss";
import styles from "../styles/Home.module.css";
import { useGridState } from "../state/SearchGridContext";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main className={css.homePage}>
        <header>
          <h1>You've got the match, now set the perfect date.</h1>
        </header>
        <section className={css.walkThrough}></section>
      </main>
    </Layout>
  );
}

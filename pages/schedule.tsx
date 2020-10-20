import * as React from "react";
import css from "../styles/Schedule.module.scss";
import {
  Layout,
  ScheduleGrid,
  PartsContainer,
  TouchProvider,
} from "../components";

export default function Schedule(): JSX.Element {
  return (
    <Layout>
      <main className={css.main}>
        <header>
          <div className={css.datesSelector}></div>
          <div className={css.times}></div>
        </header>
        <TouchProvider>
          <ScheduleGrid></ScheduleGrid>
          <PartsContainer></PartsContainer>
        </TouchProvider>
      </main>
    </Layout>
  );
}

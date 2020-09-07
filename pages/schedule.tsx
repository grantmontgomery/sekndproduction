import * as React from "react";
import css from "../styles/Schedule.module.scss";
import { Layout, ScheduleGrid, DateParts } from "../components";
import { DatePart } from "../components/DatePart/indext";

export default function Schedule() {
  return (
    <React.Fragment>
      <Layout></Layout>
      <main className={css.main}>
        <section className={css.grid}>
          <ScheduleGrid></ScheduleGrid>
        </section>
        <section className={css.partsBar}>
          <DateParts location="schedulePage"></DateParts>
        </section>
        <section className={css.mobileBar}></section>
        <section className={css.scheduledBar}></section>
      </main>
    </React.Fragment>
  );
}

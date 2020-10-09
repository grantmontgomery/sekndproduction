import * as React from "react";
import css from "../styles/Schedule.module.scss";
import { usePartsState } from "../state/DatePartsContext";
import {
  Layout,
  DateParts,
  DatePart,
  ScheduleGrid,
  PartsContainer,
} from "../components";

export default function Schedule(): JSX.Element {
  const { parts } = usePartsState();
  return (
    <Layout>
      <main className={css.main}>
        <header>
          <div className={css.datesSelector}></div>
          <div className={css.times}></div>
        </header>
        <ScheduleGrid></ScheduleGrid>
        <PartsContainer></PartsContainer>
      </main>
    </Layout>
  );
}

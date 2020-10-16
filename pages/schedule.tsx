import * as React from "react";
import css from "../styles/Schedule.module.scss";
import { usePartsState } from "../state/DatePartsContext";
import {
  Layout,
  DateParts,
  DatePart,
  ScheduleGrid,
  PartsContainer,
  TouchProvider,
} from "../components";

export default function Schedule(): JSX.Element {
  const [list, extendList] = React.useState<boolean>(false);
  const { parts } = usePartsState();
  return (
    <Layout>
      <main className={css.main}>
        <header>
          <div className={css.datesSelector}></div>
          <div className={css.times}></div>
        </header>
        <TouchProvider>
          <ScheduleGrid></ScheduleGrid>
        </TouchProvider>

        <PartsContainer></PartsContainer>
      </main>
    </Layout>
  );
}

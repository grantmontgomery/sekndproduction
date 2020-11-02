import * as React from "react";
import css from "../styles/Schedule.module.scss";
import { useGridState } from "../state/SearchGridContext";
import {
  Layout,
  ScheduleGrid,
  PartsContainer,
  TouchProvider,
  SchedulePartSelector,
} from "../components";
import { start } from "repl";

export default function Schedule(): JSX.Element {
  const { startDate, endDate } = useGridState();

  const displayTimes: () => void = () => {
    if (endDate && startDate) {
      const startObject: Date = new Date(startDate);
      const endObject: Date = new Date(endDate);

      const convertHour: (dateObject: Date) => string = (dateObject) => {
        const dateString: string = dateObject.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        const semiColonIndex: number = dateString.indexOf(":");
        const hourInt: number = parseInt(
          dateString.substring(0, semiColonIndex)
        );

        return hourInt < 10
          ? `${hourInt}${dateString.substring(semiColonIndex)}`
          : dateString;
      };

      return (
        <React.Fragment>
          <span
            className={css.startTime}
          >{`${startObject.toLocaleDateString()} ${convertHour(
            startObject
          )}`}</span>
          <span
            className={css.endTime}
          >{`${endObject.toLocaleDateString()} ${convertHour(
            endObject
          )}`}</span>
        </React.Fragment>
      );
    }
  };
  return (
    <Layout>
      <main className={css.main}>
        <SchedulePartSelector></SchedulePartSelector>
        <header>
          <div className={css.datesSelector}>No Saved Dates</div>
          <div className={css.times}>
            {displayTimes()}
            <button className={css.save}>Save +</button>
          </div>
        </header>
        <TouchProvider>
          <ScheduleGrid></ScheduleGrid>
          <PartsContainer></PartsContainer>
        </TouchProvider>
      </main>
    </Layout>
  );
}

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
  const [list, extendList] = React.useState<boolean>(false)
  const { parts } = usePartsState();
  console.log(list)
  return (
    <Layout>
      <main className={css.main}>
        <header>
          <div className={css.datesSelector}></div>
          <div className={css.times}></div>
        </header>
        <ScheduleGrid></ScheduleGrid>
        {/* <div className={css.partsList} onClick={() => list ? extendList(false) : extendList(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" style={{transform: list ? "rotate(135deg)": "rotate(0)"}}>
            <defs>
            <linearGradient id="grad0'
            1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor:"#00C9FF"}} />
          <stop offset="100%" style={{stopColor:"#92FE9D"}} />
            </linearGradient>

            </defs>
  
            <polygon  points="360 144 360 216 216 216 216 360 144 360 144 216 0 216 0 144 144 144 144 0 216 0 216 144 360 144"/></svg>
        </div> */}
        <PartsContainer></PartsContainer>
      </main>
    </Layout>
  );
}

import * as React from "react";
import { Layout } from "../../components";
import {
  yelpBusinessesCall,
  yelpEventsCall,
  ticketMasterCall,
} from "../../apicalls";
import css from "../../styles/Queried.module.scss";

export default function Queried(props) {
  console.log(props);
  return (
    <Layout>
      <main className={css.queriedPage}>
        <section className={css.queryDisplay}></section>
        <section className={css.header}></section>
        <section className={css.results}>
          <div className={css.resultsSlider}></div>
        </section>
      </main>
    </Layout>
  );
}

Queried.getInitialProps = async ({ query }) => {
  if (query.queried) {
    const checkURLIsString: string = query.queried.toString();
    const paramValueArray: string[] = checkURLIsString.split("+");

    const searchParamsValues: { [key: string]: string } = {};

    paramValueArray.forEach((param) => {
      const indexOfEqual: number = param.search("=");
      if (indexOfEqual === -1) return;
      else {
        const paramKey: string = param.substring(0, indexOfEqual);
        const paramValue: string = param.substring(indexOfEqual + 1);
        searchParamsValues[paramKey] = paramValue;
      }
    });

    const callResponse = await yelpBusinessesCall(searchParamsValues);

    return { props: { results: callResponse } };
  } else {
    return { props: {} };
  }
};

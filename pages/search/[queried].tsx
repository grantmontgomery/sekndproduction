import * as React from "react";
import { Layout, ResultCard } from "../../components";
import {
  yelpBusinessesCall,
  yelpEventsCall,
  ticketMasterCall,
} from "../../apicalls";
import css from "../../styles/Queried.module.scss";

export default function Queried({ props: { results } }) {
  return (
    <Layout>
      <main className={css.queriedPage}>
        <section className={css.queryDisplay}></section>
        <section className={css.header}></section>
        <section className={css.results}>
          <div className={css.resultsSlider}>
            {results.businesses.map((business) => (
              <ResultCard></ResultCard>
            ))}
          </div>
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

    const callResponse: Response = await yelpBusinessesCall(searchParamsValues);

    return { results: callResponse };
  } else {
    return { results: {} };
  }
};

import * as React from "react";
import { Layout, ResultCard } from "../../components";
import {
  yelpBusinessesCall,
  yelpEventsCall,
  ticketMasterCall,
} from "../../apicalls";
import css from "../../styles/Queried.module.scss";

export default function Queried({ results, searchType }): JSX.Element {
  const [state, setState] = React.useState({ resultsType: "" });
  React.useEffect(() => {
    if (searchType) {
      switch (searchType) {
        case "ALL":
      }
    }
  });

  const setTypeButtons: () => JSX.Element = () => {
    if (searchType) {
      switch (searchType) {
        case "ALL":
          return (
            <React.Fragment>
              <button className={css.typeButton}>Places</button>
              <button className={css.typeButton}>Events</button>
            </React.Fragment>
          );
        case "PLACES":
          return <button className={css.typeButton}>Places</button>;

        case "EVENTS":
          return <button className={css.typeButton}>Events</button>;
        default:
          return (
            <React.Fragment>
              <button className={css.typeButton}>Places</button>
              <button className={css.typeButton}>Events</button>
            </React.Fragment>
          );
      }
    } else {
      return (
        <React.Fragment>
          <button className={css.typeButton}>Places</button>
          <button className={css.typeButton}>Events</button>
        </React.Fragment>
      );
    }
  };

  return (
    <Layout>
      <main className={css.queriedPage}>
        <section className={css.queryDisplay}></section>
        <section className={css.header}>
          {setTypeButtons()}
          <button className={css.sort}>Sort</button>
        </section>
        <section className={css.results}>
          <div className={css.resultsSlider}>
            {/* {results
              ? results.map((item) => {
                  return <ResultCard key={item.id} item={item}></ResultCard>;
                })
              : null} */}
            <ResultCard item={{}}></ResultCard>
          </div>
        </section>
      </main>
    </Layout>
  );
}

Queried.getInitialProps = async ({
  query,
}): Promise<{ results: any; searchType: string }> => {
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

    const apiResponse: Promise<
      { [key: string]: any }[] | string
    > = await yelpBusinessesCall(searchParamsValues);

    return { results: apiResponse, searchType: searchParamsValues.searchType };
  } else {
    return { results: {}, searchType: "ALL" };
  }
};

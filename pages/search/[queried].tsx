import * as React from "react";
import { Layout, ResultCard } from "../../components";
import {
  yelpBusinessesCall,
  yelpEventsCall,
  ticketMasterCall,
} from "../../apicalls";
import css from "../../styles/Queried.module.scss";

type Results = {
  items: { places: { [key: string]: any }[]; events: { [key: string]: any }[] };
  errors: { yelpPlaces: string; yelpEvents: string; ticketmaster: string };
};

type APIResponse = Promise<{ [key: string]: any }[] | string>;

type ParamsOrResults = { [key: string]: any };
class APICalls {
  searchParams: ParamsOrResults;
  results: Results;
  constructor(searchParams: ParamsOrResults) {
    this.searchParams = searchParams;
    this.results = {
      items: { places: [], events: [] },
      errors: { yelpPlaces: "", yelpEvents: "", ticketmaster: "" },
    };
  }

  public async yelpBusinesses() {
    const yelpBusinessesResponse: APIResponse = await yelpBusinessesCall(
      this.searchParams
    );
    Array.isArray(yelpBusinessesResponse)
      ? (this.results.items.places = yelpBusinessesResponse)
      : (this.results.errors.yelpPlaces = `${yelpBusinessesResponse}`);
  }
  public async yelpEvents() {
    const yelpEventsResponse: APIResponse = await yelpEventsCall(
      this.searchParams
    );
    Array.isArray(yelpEventsResponse)
      ? (this.results.items.events = [
          ...this.results.items.events,
          ...yelpEventsResponse,
        ])
      : (this.results.errors.yelpEvents = `${yelpEventsResponse}`);
  }
  public async ticketMaster() {
    const ticketMasterResponse: APIResponse = await ticketMasterCall(
      this.searchParams
    );
    Array.isArray(ticketMasterResponse)
      ? (this.results.items.events = [
          ...this.results.items.events,
          ...ticketMasterResponse,
        ])
      : (this.results.errors.ticketmaster = `${ticketMasterResponse}`);
  }
}

export default function Queried({ results, searchType }): JSX.Element {
  const [state, setState] = React.useState({ resultsType: "" });

  console.log(results);
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
            {results && Array.isArray(results)
              ? results.map((item) => {
                  return <ResultCard key={item.id} item={item}></ResultCard>;
                })
              : null}
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

    const callAPIS: (searchType: string) => Promise<Results> = async (
      searchType
    ) => {
      const APICall = new APICalls(searchParamsValues);

      try {
        switch (searchType) {
          case "PLACES":
            APICall.yelpBusinesses();

            return APICall.results;

          case "EVENTS":
            APICall.yelpEvents();
            APICall.ticketMaster();
            return APICall.results;
          case "ALL":
            APICall.yelpBusinesses();
            APICall.yelpEvents();
            APICall.ticketMaster();
            return APICall.results;
          default:
            APICall.yelpBusinesses();
            APICall.yelpEvents();
            APICall.ticketMaster();
            return APICall.results;
        }
      } catch {
        APICall.results.errors.yelpPlaces = "CALL ERROR";
        APICall.results.errors.yelpEvents = "CALL ERROR";
        APICall.results.errors.ticketmaster = "CALL ERROR";
        return APICall.results;
      }
    };

    return {
      results: callAPIS(searchParamsValues.searchType),
      searchType: searchParamsValues.searchType,
    };
  } else {
    return { results: {}, searchType: "ALL" };
  }
};

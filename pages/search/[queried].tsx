import * as React from "react";
import { Layout, ResultCard, SekndLoader } from "../../components";
import useAPICalls from "../../swr/useAPICalls";
import { NextRouter, useRouter } from "next/router";
import { useSquaresState } from "../../state/GridRectanglesContext";
import { useGridState } from "../../state/SearchGridContext";
import css from "../../styles/Queried.module.scss";

type Results = {
  items: { [key: string]: any }[];
  errors: {
    yelpPlacesError?: string | undefined;
    yelpEventsError?: string | undefined;
    ticketmasterError?: string | undefined;
  };
};

type APIResponse = { [key: string]: any }[];

type SearchParams = { [key: string]: any };

export default function Queried(): JSX.Element {
  const [state, setState] = React.useState<{ resultsType: string }>({
    resultsType: "place",
  });
  const router: NextRouter = useRouter();

  const urlStart: string =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://sekndapp.com";

  const setSearchParameters: () => { [key: string]: any } | null = () => {
    const { query } = router;
    if (!query.queried) return null;
    if (query.searchType) return query;

    const checkURLIsString: string = query.queried.toString();
    const paramValueArray: string[] = checkURLIsString.split("+");

    const SearchParams: SearchParams = {};

    paramValueArray.forEach((param) => {
      const indexOfEqual: number = param.search("=");
      if (indexOfEqual === -1) return;
      else {
        const paramKey: string = param.substring(0, indexOfEqual);
        const paramValue: string = param.substring(indexOfEqual + 1);
        SearchParams[paramKey] = paramValue;
      }
    });
    return SearchParams;
  };

  const { items, loading, errors } = useAPICalls(
    setSearchParameters(),
    urlStart
  );

  React.useEffect(() => {
    console.log("setting result type");
    if (setSearchParameters()) {
      setSearchParameters().searchType === "EVENTS"
        ? setState({ resultsType: "event" })
        : null;
    }
  }, [setSearchParameters()]);

  const setResultsButtons: () => JSX.Element | null = () => {
    if (loading) return null;
    return setSearchParameters() &&
      setSearchParameters().searchType === "ALL" ? (
      <React.Fragment>
        <button
          className={css.typeButton}
          onClick={() => setState({ resultsType: "place" })}
        >
          Places
        </button>
        <button
          className={css.typeButton}
          onClick={() => setState({ resultsType: "event" })}
        >
          Events
        </button>
      </React.Fragment>
    ) : null;
  };

  const loadingDisplayItems: () => JSX.Element | JSX.Element[] = () => {
    if (loading) {
      return (
        <React.Fragment>
          <ResultCard key={"loading1"} resultsLoading={true}></ResultCard>
          <ResultCard key={"loading2"} resultsLoading={true}></ResultCard>
          <ResultCard key={"loading3"} resultsLoading={true}></ResultCard>
        </React.Fragment>
      );
    } else {
      return items && items.length > 0
        ? items
            .filter((item) => {
              if (setSearchParameters().searchType !== "ALL") return item;
              return state.resultsType === "place"
                ? item.type === "place"
                : item.type === "event";
            })
            .map((item) => <ResultCard key={item.id} item={item}></ResultCard>)
        : null;
    }
  };

  return (
    <Layout>
      <main className={css.queriedPage}>
        {/* <section className={css.queryDisplay}></section> */}
        <section className={css.header}>
          {setResultsButtons()}
          <button className={css.sort}>Sort</button>
        </section>

        <div className={css.resultsSlider}>{loadingDisplayItems()}</div>
      </main>
    </Layout>
  );
}

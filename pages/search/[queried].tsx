import * as React from "react";
import { Layout, ResultCard, SekndLoader } from "../../components";
import useAPICalls from "../../swr/useAPICalls";
import { ResultsFilter } from "../../components";
import { NextRouter, useRouter } from "next/router";
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
    resultsType: "places",
  });
  const router: NextRouter = useRouter();

  const urlStart: string =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://sekndapp.com";

  const setSearchParameters: () => { [key: string]: any } | null = () => {
    if (!router.query.queried) return null;
    if (router.query.searchType) return router.query;

    const { query } = router;

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

  const handleResultsTypeChange: (input: string) => void = (input) => {
    if (input === "places") {
      setState({ resultsType: "places" });
    } else {
      setState({ resultsType: "events" });
    }
  };

  React.useEffect(() => {
    if (setSearchParameters()) {
      setSearchParameters().searchType === "EVENTS"
        ? setState({ resultsType: "events" })
        : null;
    }
  }, [setSearchParameters()]);

  const itemsRefObject: React.MutableRefObject<
    { [key: string]: any }[] | undefined
  > = React.useRef(undefined);

  React.useEffect(() => {
    itemsRefObject.current = items;
  }, [items]);

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
      return itemsRefObject.current && itemsRefObject.current.length > 0
        ? itemsRefObject.current
            .filter((item) => {
              if (setSearchParameters().searchType !== "ALL") return item;
              return state.resultsType === "places"
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
        <ResultsFilter
          resultsLoading={loading}
          resultsType={state.resultsType}
          handleResultsTypeChange={handleResultsTypeChange}
          searchParams={setSearchParameters() ? setSearchParameters() : null}
        ></ResultsFilter>
        <section className={css.sliderWrapper}>
          <div className={css.resultsSlider}>{loadingDisplayItems()}</div>
        </section>
      </main>
    </Layout>
  );
}

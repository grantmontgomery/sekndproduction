import * as React from "react";
import {
  Layout,
  ResultCard,
  SekndLoader,
  ResultsFilter,
  ResultsSection,
} from "../../components";
import useAPICalls from "../../swr/useAPICalls";
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

  const { items: initialItems, loading: initialLoading, errors } = useAPICalls(
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

  return (
    <Layout>
      <main className={css.queriedPage}>
        <ResultsFilter
          resultsLoading={initialLoading}
          resultsType={state.resultsType}
          handleResultsTypeChange={handleResultsTypeChange}
          searchParams={setSearchParameters() ? setSearchParameters() : null}
        ></ResultsFilter>
        {/* <section className={css.sliderWrapper}>
          <div className={css.resultsSlider}>{loadingDisplayItems()}</div>
        </section> */}
        <ResultsSection
          initialItems={initialItems}
          resultsType={state.resultsType}
          initialLoad={initialLoading}
          initialSearchParams={setSearchParameters()}
        ></ResultsSection>
      </main>
    </Layout>
  );
}

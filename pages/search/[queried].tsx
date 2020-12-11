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
  const [filters, setFilters] = React.useState<{
    placePrice: string | null;
    eventPrice: string | null;
  }>({
    placePrice: null,
    eventPrice: null,
  });

  const [resultsType, setType] = React.useState<string>("places");

  const router: NextRouter = useRouter();

  const urlStart: string =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://sekndapp.com";

  const setSearchParameters: () => {
    [key: string]: any;
  } | null = React.useCallback(() => {
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
  }, [router.query]);

  const { items: initialItems, loading: initialLoading, errors } = useAPICalls(
    setSearchParameters(),
    urlStart
  );

  const handleResultsTypeChange: (input: string) => void = (input) => {
    if (input === "places") {
      setType("places");
    } else {
      setType("events");
    }
  };

  const handlePlacePriceChange: (input: string | null) => void = (input) => {
    setFilters((filters) => ({ ...filters, placePrice: input }));
  };

  React.useEffect(() => {
    if (setSearchParameters()) {
      setSearchParameters().searchType === "EVENTS" ? setType("events") : null;
    }
  }, [setSearchParameters()]);

  return (
    <Layout>
      <main className={css.queriedPage}>
        <ResultsFilter
          handlePlacePriceChange={handlePlacePriceChange}
          resultsLoading={initialLoading}
          resultsType={resultsType}
          handleResultsTypeChange={handleResultsTypeChange}
          searchParams={setSearchParameters() ? setSearchParameters() : null}
        ></ResultsFilter>
        {/* <section className={css.sliderWrapper}>
          <div className={css.resultsSlider}>{loadingDisplayItems()}</div>
        </section> */}
        <ResultsSection
          filters={filters}
          initialItems={initialItems}
          resultsType={resultsType}
          initialLoad={initialLoading}
          initialSearchParams={setSearchParameters()}
        ></ResultsSection>
      </main>
    </Layout>
  );
}

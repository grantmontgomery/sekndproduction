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

export const setSearchParameters: (router: {
  query: { [key: string]: any };
}) => {
  [key: string]: any;
} | null = (router) => {
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

  const {
    items: initialItems,
    loading: initialLoading,
    errors,
    yelpPlacesTotal,
    yelpEventsTotal,
    ticketmasterTotal,
  } = useAPICalls(setSearchParameters(router), urlStart);

  const handleResultsTypeChange: (input: string) => void = (input) => {
    if (input === "places") {
      setType("places");
    } else {
      setType("events");
    }
  };

  const handlePriceChange: (input: string | null) => void = (input) => {
    setFilters((filters) =>
      resultsType === "places"
        ? { ...filters, placePrice: input }
        : { ...filters, eventPrice: input }
    );
  };

  React.useEffect(() => {
    if (setSearchParameters(router)) {
      setSearchParameters(router).searchType === "EVENTS"
        ? setType("events")
        : null;
    }
  }, [setSearchParameters(router)]);

  return (
    <Layout>
      <main className={css.queriedPage}>
        <ResultsFilter
          handlePriceChange={handlePriceChange}
          resultsLoading={initialLoading}
          resultsType={resultsType}
          handleResultsTypeChange={handleResultsTypeChange}
          searchParams={
            setSearchParameters(router) ? setSearchParameters(router) : null
          }
        ></ResultsFilter>

        <ResultsSection
          filters={filters}
          initialItems={initialItems}
          resultsType={resultsType}
          yelpPlacesTotal={yelpPlacesTotal}
          yelpEventsTotal={yelpEventsTotal}
          ticketmasterTotal={ticketmasterTotal}
          initialLoad={initialLoading}
          initialSearchParams={setSearchParameters(router)}
        ></ResultsSection>
      </main>
    </Layout>
  );
}

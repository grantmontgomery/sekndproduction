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
import css from "../../styles/Queried.module.scss";

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
  const [globalFilters, setGlobalFilters] = React.useState<{
    placePrice: string | null;
    eventPrice: string | null;
  }>({
    placePrice: null,
    eventPrice: null,
  });

  const [resultsType, setType] = React.useState<"events" | "places">("places");

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
    setGlobalFilters((globalFilters) =>
      resultsType === "places"
        ? { ...globalFilters, placePrice: input }
        : { ...globalFilters, eventPrice: input }
    );
  };

  React.useEffect(() => {
    if (setSearchParameters(router)) {
      setSearchParameters(router).searchType === "EVENTS" && setType("events");
    }
  }, [setSearchParameters(router)]);

  React.useEffect(() => {
    if (resultsType === "events") {
      setGlobalFilters((globalFilters) => ({
        ...globalFilters,
        placePrice: null,
      }));
    } else {
      setGlobalFilters((globalFilters) => ({
        ...globalFilters,
        eventPrice: null,
      }));
    }
  }, [resultsType]);

  return (
    <Layout>
      <main className={css.queriedPage}>
        <ResultsFilter
          handlePriceChange={handlePriceChange}
          resultsLoading={initialLoading}
          resultsType={resultsType}
          handleResultsTypeChange={handleResultsTypeChange}
          searchParams={
            setSearchParameters(router) && setSearchParameters(router)
          }
          globalFilters={globalFilters}
        ></ResultsFilter>

        <ResultsSection
          globalFilters={globalFilters}
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

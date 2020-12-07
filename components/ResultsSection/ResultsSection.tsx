import * as React from "react";
import { ResultCard } from "../SearchResults";
import css from "./ResultsSection.module.scss";

export const ResultsSection: React.FC<{
  filters: { [key: string]: any };
  initialLoad: boolean;
  initialItems: { [key: string]: any }[] | null;
  initialSearchParams: { [key: string]: any } | null;
  resultsType: string;
}> = ({
  initialItems,
  initialSearchParams,
  initialLoad,
  resultsType,
  filters,
}) => {
  const placesRefObject: React.MutableRefObject<
    { [key: string]: any }[] | undefined
  > = React.useRef(undefined);
  const eventsRefObject: React.MutableRefObject<
    { [key: string]: any }[] | undefined
  > = React.useRef(undefined);
  const searchParamsRefObject: React.MutableRefObject<
    { [key: string]: any } | undefined
  > = React.useRef(undefined);

  React.useEffect(() => {
    searchParamsRefObject.current = initialSearchParams;
  }, [initialSearchParams]);

  React.useEffect(() => {
    placesRefObject.current = initialItems
      ? initialItems.filter((item) => item.type === "place")
      : null;
    eventsRefObject.current = initialItems
      ? initialItems.filter((item) => item.type === "event")
      : null;
  }, [initialItems]);

  const loadingDisplayItems: () => JSX.Element | JSX.Element[] = () => {
    if (initialLoad)
      return (
        <React.Fragment>
          <ResultCard key={"loading1"} resultsLoading={true}></ResultCard>
          <ResultCard key={"loading2"} resultsLoading={true}></ResultCard>
          <ResultCard key={"loading3"} resultsLoading={true}></ResultCard>
        </React.Fragment>
      );

    switch (resultsType) {
      case "places":
        return placesRefObject.current && placesRefObject.current.length >= 0
          ? placesRefObject.current.map((item) => (
              <ResultCard key={item.id} item={item}></ResultCard>
            ))
          : null;

      case "events":
        return eventsRefObject.current && eventsRefObject.current.length >= 0
          ? eventsRefObject.current.map((item) => (
              <ResultCard key={item.id} item={item}></ResultCard>
            ))
          : null;
    }
  };

  return (
    <section className={css.resultsSection}>
      <div className={css.resultsSlider}>{loadingDisplayItems()}</div>
    </section>
  );
};

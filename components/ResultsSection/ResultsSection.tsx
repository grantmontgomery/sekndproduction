import * as React from "react";
import { ResultCard } from "../SearchResults";
import { usePlacesCall } from "./Hooks/usePlacesCall";
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
  const [placesOffset, setPlacesOffset] = React.useState<number>(0);
  const [eventsOffset, setEventsOffset] = React.useState<number>(0);
  const [placesResults, setPlacesResults] = React.useState<
    { [key: string]: any }[] | null
  >(null);
  const [eventsResults, setEventsResults] = React.useState<
    { [key: string]: any }[] | null
  >(null);

  const { placesLoading, triggerPlacesCall } = usePlacesCall();

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
    if (filters.placePrice) {
      setPlacesOffset(0);
      setPlacesResults(null);
      searchParamsRefObject.current = {
        ...searchParamsRefObject.current,
        placesPrice: filters.placePrice,
      };
      const handleAPICall: () => Promise<any> = async () => {
        try {
          const response = await triggerPlacesCall(
            searchParamsRefObject.current
          );
          if (typeof response === "object") setPlacesResults(response);
        } catch {
          return;
        }
      };
      handleAPICall();
    } else {
    }
  }, [filters.placePrice]);

  console.log(placesResults);

  React.useEffect(() => {
    if (placesOffset === 0) return;
    searchParamsRefObject.current = { ...searchParamsRefObject, placesOffset };
    triggerPlacesCall(searchParamsRefObject.current);
  }, [placesOffset]);

  React.useEffect(() => {
    if (initialItems) {
      setPlacesResults(initialItems.filter((item) => item.type === "place"));
      setEventsResults(initialItems.filter((item) => item.type === "event"));
    }
  }, [initialItems]);

  // React.useEffect(() => {
  //   placesRefObject.current = initialItems
  //     ? initialItems.filter((item) => item.type === "place")
  //     : null;
  //   eventsRefObject.current = initialItems
  //     ? initialItems.filter((item) => item.type === "event")
  //     : null;
  // }, [initialItems]);

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
        return placesResults && placesResults.length >= 0
          ? placesResults.map((item) => (
              <ResultCard key={item.id} item={item}></ResultCard>
            ))
          : null;

      case "events":
        return eventsResults && eventsResults.length >= 0
          ? eventsResults.map((item) => (
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

import { format } from "path";
import { off } from "process";
import * as React from "react";
import { getEnabledCategories } from "trace_events";
import { LoadingRing } from "../LoadingRing";
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
  const [placesRefresh, setPlacesRefresh] = React.useState<boolean>(false);
  const [eventsRefresh, setEventsRefresh] = React.useState<boolean>(false);
  const [offsetLoad, setOffsetLoad] = React.useState<boolean>(false);

  const [placesResults, setPlacesResults] = React.useState<
    { [key: string]: any }[] | null
  >(null);
  const [eventsResults, setEventsResults] = React.useState<
    { [key: string]: any }[] | null
  >(null);

  const observer: React.MutableRefObject<
    IntersectionObserver | undefined
  > = React.useRef();

  const placesReloadRef: React.MutableRefObject<
    HTMLElement | undefined
  > = React.useRef();

  const searchParamsRefObject: React.MutableRefObject<
    { [key: string]: any } | undefined
  > = React.useRef(undefined);

  React.useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].target === placesReloadRef.current) {
            if (entries[i].intersectionRatio >= 0.9) {
              setPlacesOffset((placesOffset) => placesOffset + 1);
            }
          }
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );
    placesReloadRef.current = document.getElementById("placesReloadSection");
    observer.current.observe(placesReloadRef.current);
    return () => {
      observer.current.disconnect();
    };
  }, []);

  const { placesLoading, triggerPlacesCall } = usePlacesCall();

  React.useEffect(() => {
    searchParamsRefObject.current = initialSearchParams;
  }, [initialSearchParams]);

  React.useEffect(() => {
    if (filters.placePrice) {
      setPlacesOffset(0);
      searchParamsRefObject.current = {
        ...searchParamsRefObject.current,
        placesPrice: filters.placePrice,
      };
      const handleAPICall: () => Promise<any> = async () => {
        setPlacesRefresh(true);
        try {
          const response = await triggerPlacesCall(
            searchParamsRefObject.current
          );
          setPlacesRefresh(false);
          if (typeof response === "object") setPlacesResults(response);
        } catch {
          setPlacesRefresh(false);
          return;
        }
      };
      handleAPICall();
    } else {
    }
  }, [filters.placePrice]);

  React.useEffect(() => {
    if (placesOffset === 0) return;

    console.log("offset trigger");
    searchParamsRefObject.current = {
      ...searchParamsRefObject.current,
      placesOffset,
    };

    const handleOffsetCall: () => Promise<any> = async () => {
      setOffsetLoad(true);

      try {
        const response = await triggerPlacesCall(searchParamsRefObject.current);
        setOffsetLoad(false);

        console.log(response);

        if (typeof response === "object")
          setPlacesResults((prevResults) => [...prevResults, ...response]);
      } catch (error) {
        setOffsetLoad(false);

        return error;
      }
    };
    handleOffsetCall();
  }, [placesOffset]);

  React.useEffect(() => {
    if (initialItems) {
      setPlacesResults(initialItems.filter((item) => item.type === "place"));
      setEventsResults(initialItems.filter((item) => item.type === "event"));
    }
  }, [initialItems]);

  const loadingDisplayItems: () => JSX.Element | JSX.Element[] = () => {
    if (initialLoad || placesLoading)
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
      <div className={css.resultsSlider}>
        {loadingDisplayItems()}

        <div id="placesReloadSection" className={css.reloadSection}>
          {offsetLoad ? (
            <LoadingRing location={"resultsPage"}></LoadingRing>
          ) : null}
        </div>
      </div>
    </section>
  );
};

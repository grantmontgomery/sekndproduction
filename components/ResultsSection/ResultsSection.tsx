import * as React from "react";
import { ResultsList } from "../ResultsList";
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
  yelpPlacesTotal: number;
  yelpEventsTotal: number;
  ticketmasterTotal: number;
}> = ({
  initialItems,
  initialSearchParams,
  initialLoad,
  resultsType,
  filters,
  yelpPlacesTotal,
  yelpEventsTotal,
  ticketmasterTotal,
}) => {
  const [offset, setOffset] = React.useState<number>(0);
  const [placesRefresh, setPlacesRefresh] = React.useState<boolean>(false);
  const [eventsRefresh, setEventsRefresh] = React.useState<boolean>(false);
  const [offsetLoad, setOffsetLoad] = React.useState<boolean>(false);

  const [placesResults, setPlacesResults] = React.useState<
    { [key: string]: any }[] | null
  >(null);
  const [eventsResults, setEventsResults] = React.useState<
    { [key: string]: any }[] | null
  >(null);

  const searchParamsRefObject: React.MutableRefObject<
    { [key: string]: any } | undefined
  > = React.useRef(undefined);

  const { placesLoading, triggerPlacesCall } = usePlacesCall();

  React.useEffect(() => {
    searchParamsRefObject.current = initialSearchParams;
  }, [initialSearchParams]);

  React.useEffect(() => {
    if (filters.placePrice) {
      setOffset(0);
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
    if (offset > 0 && searchParamsRefObject.current) {
      searchParamsRefObject.current = {
        ...searchParamsRefObject.current,
        offset,
      };

      if (resultsType === "places") {
        const handleOffsetCall: () => Promise<any> = async () => {
          setOffsetLoad(true);
          try {
            const response = await triggerPlacesCall(
              searchParamsRefObject.current
            );
            setOffsetLoad(false);

            if (typeof response === "object")
              setPlacesResults((prevResults) => [...prevResults, ...response]);
          } catch (error) {
            setOffsetLoad(false);

            return error;
          }
        };
        handleOffsetCall();
      } else {
      }
    }
  }, [offset]);

  React.useEffect(() => {
    if (initialItems) {
      setPlacesResults(initialItems.filter((item) => item.type === "place"));
      setEventsResults(initialItems.filter((item) => item.type === "event"));
    }
  }, [initialItems]);

  const changeOffsetNumber: (input: number) => void = (input) => {
    input === 1 ? setOffset((offset) => offset + 1) : setOffset(0);
  };

  const loadingDisplayItems: () => JSX.Element | JSX.Element[] = () => {
    if (initialLoad || placesRefresh) {
      return (
        <div className={css.skeletonWrapper}>
          <ResultCard key={"loading1"} resultsLoading={true}></ResultCard>
          <ResultCard key={"loading2"} resultsLoading={true}></ResultCard>
          <ResultCard key={"loading3"} resultsLoading={true}></ResultCard>
        </div>
      );
    } else {
      return (
        <ResultsList
          items={resultsType === "places" ? placesResults : eventsResults}
          yelpPlacesTotal={yelpPlacesTotal}
          yelpEventsTotal={yelpEventsTotal}
          ticketmasterTotal={ticketmasterTotal}
          offsetLoad={offsetLoad}
          changeOffsetNumber={changeOffsetNumber}
          type={resultsType}
        ></ResultsList>
      );
    }
  };

  return (
    <section className={css.resultsSection}>{loadingDisplayItems()}</section>
  );
};

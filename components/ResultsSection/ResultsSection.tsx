import * as React from "react";
import { ResultsList } from "../ResultsList";
import { LoadingRing } from "../LoadingRing";
import { ResultCard } from "../SearchResults";
import { useTicketMasterCall, useYelpEventsCall, usePlacesCall } from "./Hooks";
import css from "./ResultsSection.module.scss";
import { resourceLimits } from "worker_threads";
import { parse } from "path";

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
  ///////////////////////////////////////////////////////////State

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

  ///////////////////////////////////////////////////////////////Refs Set Up

  const searchParamsRefObject: React.MutableRefObject<
    { [key: string]: any } | undefined
  > = React.useRef(undefined);

  const currentPlacesTotal: React.MutableRefObject<
    number | undefined
  > = React.useRef(undefined);

  const currentYelpEventsTotal: React.MutableRefObject<number> = React.useRef(
    undefined
  );

  const currentTicketMasterTotal: React.MutableRefObject<number> = React.useRef(
    undefined
  );

  //////////////////////////////////////////////////////////////////////////////////////// API HOOKS

  const { placesLoading, triggerPlacesCall } = usePlacesCall();
  const { triggerYelpEventsCall, yelpEventsLoading } = useYelpEventsCall();
  const {
    triggerTicketMasterCall,
    ticketmasterLoading,
  } = useTicketMasterCall();

  /////////////////////////////////////////////////////////////////////////////////// UseEffect HOOKS

  React.useEffect(() => {
    if (initialItems) {
      setPlacesResults(initialItems.filter((item) => item.type === "place"));
      setEventsResults(initialItems.filter((item) => item.type === "event"));
    }
  }, [initialItems]);

  React.useEffect(() => {
    currentPlacesTotal.current = yelpPlacesTotal;
  }, [yelpPlacesTotal]);

  React.useEffect(() => {
    currentYelpEventsTotal.current = yelpEventsTotal;
  }, [yelpEventsTotal]);

  React.useEffect(() => {
    currentTicketMasterTotal.current = ticketmasterTotal;
  }, [ticketmasterTotal]);

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
          if (typeof response === "object") {
            currentPlacesTotal.current = response.total;
            setPlacesResults(response.results);
          }
        } catch {
          setPlacesRefresh(false);
          return;
        }
      };
      handleAPICall();
    }
  }, [filters.placePrice]);

  React.useEffect(() => {
    if (filters.eventPrice) {
      setOffset(0);
      searchParamsRefObject.current = {
        ...searchParamsRefObject.current,
        eventsPrice: filters.eventPrice,
      };
      setEventsRefresh(true);
      // const handleAPICall: () => Promise<any> = async () => {
      //   setEventsRefresh(true);
      //   try {
      //     let responseList: { [key: string]: any }[] = [];
      //     const yelpEventsResponse = await triggerYelpEventsCall(
      //       searchParamsRefObject.current
      //     );
      //     const ticketMasterResponse = await triggerTicketMasterCall(
      //       searchParamsRefObject.current
      //     );

      //     if (typeof yelpEventsResponse === "object")
      //       responseList = [...responseList, ...yelpEventsResponse.results];
      //       currentYelpEventsTotal.current = yelpEventsResponse.total
      //     if (typeof ticketMasterResponse === "object")
      //       responseList = [...responseList, ...ticketMasterResponse.results];
      //       currentTicketMasterTotal.current = ticketMasterResponse.total

      //     setEventsRefresh(false);
      //     setEventsResults(responseList);
      //   } catch {
      //     setEventsRefresh(false);
      //   }
      // }

      setEventsResults((previousEvents) => {
        if (filters.eventPrice !== "Free") {
          const limitYelpEvents = previousEvents.filter(
            (event) =>
              event.source === "yelp" &&
              event.cost &&
              parseInt(filters.price) >= event.cost
          );
          const limitTicketMasterResults = previousEvents.filter(
            (event) =>
              event.source === "ticketmaster" &&
              event.priceRanges &&
              parseInt(filters.eventPrice) >= event.priceRanges[0].min
          );

          return [...limitTicketMasterResults, ...limitYelpEvents];
        } else {
          const limitYelpEvents = previousEvents.filter(
            (event) => event.source === "yelp" && event.is_free
          );
          const limitTicketMasterResults = previousEvents.filter(
            (event) =>
              (event.source === "ticketmaster" &&
                event.priceRanges &&
                event.priceRanges[0].min === 0) ||
              !event.priceRanges
          );

          return [...limitTicketMasterResults, ...limitYelpEvents];
        }
      });

      // const limitTicketMasterResults =

      setEventsRefresh(false);
    }
  }, [filters.eventPrice]);

  React.useEffect(() => {
    if (offset > 0 && searchParamsRefObject.current) {
      searchParamsRefObject.current = {
        ...searchParamsRefObject.current,
        offset,
      };

      switch (resultsType) {
        case "places":
          if (placesResults.length + 1 >= currentPlacesTotal.current) return;

          const handlePlacesOffsetCall: () => Promise<any> = async () => {
            setOffsetLoad(true);
            try {
              const response = await triggerPlacesCall(
                searchParamsRefObject.current
              );
              setOffsetLoad(false);

              if (typeof response === "object")
                setPlacesResults((prevResults) => [
                  ...prevResults,
                  ...response.results,
                ]);
            } catch (error) {
              setOffsetLoad(false);
              console.log(error);
              return error;
            }
          };
          handlePlacesOffsetCall();
        case "events":
          if (
            eventsResults.length + 2 >=
            currentTicketMasterTotal.current + currentYelpEventsTotal.current
          )
            return;

          const yelpEventsCurrentCount: number = eventsResults.filter(
            (event) => event.source === "yelp"
          ).length;
          const ticketmasterCurrentCount: number = eventsResults.filter(
            (event) => event.source === "ticketmaster"
          ).length;

          const handleEventsOffsetCall: () => Promise<any> = async () => {
            setOffsetLoad(true);
            try {
              let yelpEventsResponse = null;
              let ticketmasterResponse = null;
              if (yelpEventsCurrentCount + 1 < currentYelpEventsTotal.current)
                yelpEventsResponse = await triggerYelpEventsCall(
                  searchParamsRefObject.current
                );
              if (
                ticketmasterCurrentCount + 1 <
                currentTicketMasterTotal.current
              )
                ticketmasterResponse = await triggerTicketMasterCall(
                  searchParamsRefObject.current
                );

              setEventsResults((prevResults) => {
                let results = [...prevResults];
                if (
                  yelpEventsResponse &&
                  typeof yelpEventsResponse === "object"
                )
                  results = [...results, ...yelpEventsResponse];
                if (
                  ticketmasterResponse &&
                  typeof ticketmasterResponse === "object"
                )
                  results = [...results, ...ticketmasterResponse];

                setOffsetLoad(false);
                return results;
              });
            } catch (error) {
              console.log(error);
              setOffsetLoad(false);

              return error;
            }
          };

          handleEventsOffsetCall();
      }
    }
  }, [offset]);

  ////////////////////////////////////////////////////////////////////// Functions

  const changeOffsetNumber: (input: number) => void = (input) => {
    setOffset((offset) => {
      return input !== 0 ? input + offset : 0;
    });
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

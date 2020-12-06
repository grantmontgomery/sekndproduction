import * as React from "react";
import { ResultCard } from "../SearchResults";
import css from "./ResultsSection.module.scss";

export const ResultsSection: React.FC<{
  initialLoad: boolean;

  initialItems: { [key: string]: any }[] | null;
  initialSearchParams: { [key: string]: any } | null;
  resultsType: string;
}> = ({ initialItems, initialSearchParams, initialLoad, resultsType }) => {
  const itemsRefObject: React.MutableRefObject<
    { [key: string]: any }[] | undefined
  > = React.useRef(undefined);
  const searchParamsRefObject: React.MutableRefObject<
    { [key: string]: any } | undefined
  > = React.useRef(undefined);

  React.useEffect(() => {
    searchParamsRefObject.current = initialSearchParams;
  }, [initialSearchParams]);
  React.useEffect(() => {
    itemsRefObject.current = initialItems;
  }, [initialItems]);

  console.log(searchParamsRefObject);
  console.log(itemsRefObject.current);

  const loadingDisplayItems: () => JSX.Element | JSX.Element[] = () => {
    if (initialLoad) {
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
              return resultsType === "places"
                ? item.type === "place"
                : item.type === "event";
            })
            .map((item) => <ResultCard key={item.id} item={item}></ResultCard>)
        : null;
    }
  };

  return (
    <section className={css.resultsSection}>
      <div className={css.resultsSlider}>{loadingDisplayItems()}</div>
    </section>
  );
};

import * as React from "react";
import { LoadingRing } from "../LoadingRing";
import { EventsInput } from "../SearchBox/Parts";
import { ResultCard } from "../SearchResults";
import css from "./ResultsList.module.scss";

export const ResultsList: React.FC<{
  items: { [key: string]: any }[] | null;
  offsetLoad: boolean;
  changeOffsetNumber: (input: number) => void;
  type: string;
}> = ({ items, offsetLoad, changeOffsetNumber, type }) => {
  const observer: React.MutableRefObject<
    IntersectionObserver | undefined
  > = React.useRef();

  const reloadRef: React.MutableRefObject<
    HTMLElement | undefined
  > = React.useRef();

  React.useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].target === reloadRef.current) {
            if (
              entries[i].intersectionRatio >= 0.9 &&
              items &&
              Array.isArray(items)
            ) {
              changeOffsetNumber(1);
            }
          }
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    reloadRef.current = document.getElementById(`${type}ReloadSection`);
    observer.current.observe(reloadRef.current);

    return () => {
      changeOffsetNumber(0);
      observer.current.disconnect();
    };
  }, []);

  return (
    <div className={css.resultsList}>
      {items && items.length > 0
        ? items.map((item) => (
            <ResultCard key={item.id} item={item}></ResultCard>
          ))
        : null}
      <div id={`${type}ReloadSection`} className={css.reloadSection}>
        {offsetLoad ? (
          <LoadingRing location={"resultsPage"}></LoadingRing>
        ) : null}
      </div>
    </div>
  );
};

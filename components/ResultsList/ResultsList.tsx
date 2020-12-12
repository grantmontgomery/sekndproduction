import * as React from "react";
import { LoadingRing } from "../LoadingRing";
import { ResultCard } from "../SearchResults";
import css from "./ResultsList.module.scss";

export const ResultsList: React.FC<{
  items: { [key: string]: any }[];
  offsetLoad: boolean;
  changeOffsetNumber: (input: number) => void;
}> = ({ items, offsetLoad, changeOffsetNumber }) => {
  const observer: React.MutableRefObject<
    IntersectionObserver | undefined
  > = React.useRef();

  const placesReloadRef: React.MutableRefObject<
    HTMLElement | undefined
  > = React.useRef();

  React.useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].target === placesReloadRef.current) {
            if (entries[i].intersectionRatio >= 0.9) {
              changeOffsetNumber(1);
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
      changeOffsetNumber(0);
      observer.current.disconnect();
    };
  }, []);

  return (
    <div className={css.resultsList}>
      {items
        ? items.map((item) => {
            <ResultCard key={item.id} item={item}></ResultCard>;
          })
        : null}
      <div id="placesReloadSection" className={css.reloadSection}>
        {offsetLoad ? (
          <LoadingRing location={"resultsPage"}></LoadingRing>
        ) : null}
      </div>
    </div>
  );
};

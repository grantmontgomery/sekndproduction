import * as React from "react";
import css from "./ResultCard.module.scss";

export const ResultCard: React.FC<{ item: {} }> = ({ item }) => {
  const determineCardType: (type: string) => void = (type) => {
    return;
  };
  return <div className={css.resultCard}></div>;
};

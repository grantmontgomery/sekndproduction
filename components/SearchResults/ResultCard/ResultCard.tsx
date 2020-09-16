import { sectionFooterSecondaryContent } from "aws-amplify";
import { PlacesPrice } from "./PlacesInfo";
import * as React from "react";
import css from "./ResultCard.module.scss";

export const ResultCard: React.FC<{ item: { [key: string]: any } }> = ({
  item,
}) => {
  const [state, setState] = React.useState({ added: false });
  const determineCardType: (type: string) => void = (type) => {
    return;
  };

  return (
    <div className={css.resultCard}>
      <span className={css.title}>Title</span>
      <button
        className={css.addButton}
        onClick={() =>
          state.added
            ? setState((state) => ({ ...state, added: false }))
            : setState((state) => ({ ...state, added: true }))
        }
      >
        {state.added ? "Remove from Parts -" : "Add to Parts +"}
      </button>
      <PlacesPrice price={["", "", ""]}></PlacesPrice>

      <div className={css.starsWrapper}></div>
    </div>
  );
};

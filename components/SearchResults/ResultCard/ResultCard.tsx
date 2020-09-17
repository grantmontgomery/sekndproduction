import { PlacesPrice } from "./Parts/PlacesInfo";
import { ImageBackground } from "./Parts/ImageBackground";
import * as React from "react";
import css from "./ResultCard.module.scss";

export const ResultCard: React.FC<{ item: { [key: string]: any } }> = ({
  item,
}) => {
  const [state, setState] = React.useState({ added: false, moreInfo: false });

  const determineImageBackgroundSource: () => string = () => {
    switch (item.type) {
      case "place":
        return item.source === "yelp" ? item.image_url : null;
      case "event":
        return item.source === "yelp" ? item.image_url : item.images[0].url;
      default:
        return "";
    }
  };

  const handleRetract: () => void = () => {
    return state.moreInfo
      ? setState((state) => ({ ...state, moreInfo: false }))
      : null;
  };

  const displayMoreDetails: (array?: React.FC<any>[]) => JSX.Element | null = (
    array
  ) => {
    return state.moreInfo ? (
      <div className={css.detailsWrapper}>
        {array ? array.map((elem) => elem) : null}
      </div>
    ) : null;
  };

  const setCardDetails: () => JSX.Element = () => {
    switch (item.type) {
      case "place":
        return (
          <React.Fragment>
            <div
              className={`${css.infoBar} ${
                state.moreInfo ? css.extended : null
              }`}
            >
              <span className={css.title}>{item.name}</span>
              <PlacesPrice price={item.price}></PlacesPrice>
              <div className={css.starsWrapper}></div>
            </div>
            {displayMoreDetails()}
          </React.Fragment>
        );
      case "event":
        return (
          <React.Fragment>
            <div
              className={`${css.infoBar} ${
                state.moreInfo ? css.extended : null
              }`}
            >
              <span className={css.title}>{item.name}</span>
            </div>
            {displayMoreDetails()}
          </React.Fragment>
        );
    }
  };
  return (
    <div
      className={`${css.resultCard} ${state.moreInfo ? css.extended : null}`}
      onClick={() =>
        state.moreInfo
          ? null
          : setState((state) => ({ ...state, moreInfo: true }))
      }
    >
      <ImageBackground
        source={determineImageBackgroundSource()}
        alt={item.name}
        extended={state.moreInfo}
        handleRetract={handleRetract}
      ></ImageBackground>

      <button
        className={`${css.addButton} ${state.added ? css.remove : null}`}
        onClick={(event) => (
          event.stopPropagation(),
          state.added
            ? setState((state) => ({ ...state, added: false }))
            : setState((state) => ({ ...state, added: true }))
        )}
      >
        {state.added ? "Remove from Parts -" : "Add to Parts +"}
      </button>
      {setCardDetails()}
    </div>
  );
};

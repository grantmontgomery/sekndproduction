import { PriceAndType, Reviews, Phone } from "./Parts/PlacesInfo";
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

  const moreDetails: (type: string) => JSX.Element | null = (type) => {
    if (!state.moreInfo) return null;
    switch (type) {
      case "place":
        return (
          <div className={css.detailsWrapper}>
            <Phone phone={item.phone}></Phone>
          </div>
        );
      case "events":
        return <div className={css.detailsWrapper}></div>;
      default:
        return <div className={css.detailsWrapper}></div>;
    }
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
              <Reviews
                reviewCount={item.review_count}
                rating={item.rating}
              ></Reviews>
              <PriceAndType
                price={item.price}
                type={
                  item.categories && item.categories.length > 0
                    ? item.categories[0].title
                    : null
                }
              ></PriceAndType>
              <div className={css.starsWrapper}></div>
            </div>
            {moreDetails("place")}
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
            {moreDetails("event")}
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

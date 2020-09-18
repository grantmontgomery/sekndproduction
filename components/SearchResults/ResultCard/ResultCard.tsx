import { PriceAndType, Reviews, Phone, Location } from "./Parts/PlacesInfo";
import { ImageBackground } from "./Parts/ImageBackground";
import * as React from "react";
import css from "./ResultCard.module.scss";

export const ResultCard: React.FC<{ item: { [key: string]: any } }> = ({
  item,
}) => {
  const [state, setState] = React.useState({ added: false, moreInfo: false });

  // const parseYelpCity = addressPiece => {
  //   let splitted = addressPiece.split(",");
  //   if (splitted[0] === splitted[0].toUpperCase()) {
  //     if (splitted[0].includes(" ")) {
  //       let splitCity = splitted[0].split(" ");
  //       for (let i = 0; i < splitCity.length; i++) {
  //         splitCity[i].toLowerCase();
  //         splitCity[i][0].toUpperCase();
  //       }
  //       let newCity = splitCity.join(" ");
  //       return splitted.splice(0, 1, newCity);
  //     } else {
  //       let newCity =
  //         splitted[0][0].toUpperCase() + splitted[0].toLowerCase().substring(1);
  //       splitted.splice(0, 1, newCity);
  //       return splitted.join(",");
  //     }
  //   } else {
  //     return splitted.join(",");
  //   }
  // };

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
            <Location
              street={item.location.display_address[0]}
              city={item.location.display_address[1]}
            ></Location>
            <a href={item.url} className={css.link} target="_blank">
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="100px"
                height="100px"
              >
                <path d="M 33.40625 0 C 32.855469 0.0507813 32.449219 0.542969 32.5 1.09375 C 32.550781 1.644531 33.042969 2.050781 33.59375 2 L 46.5625 2 L 25.6875 22.90625 C 25.390625 23.148438 25.253906 23.535156 25.339844 23.910156 C 25.425781 24.28125 25.71875 24.574219 26.089844 24.660156 C 26.464844 24.746094 26.851563 24.609375 27.09375 24.3125 L 48 3.4375 L 48 16.40625 C 47.996094 16.765625 48.183594 17.101563 48.496094 17.285156 C 48.808594 17.464844 49.191406 17.464844 49.503906 17.285156 C 49.816406 17.101563 50.003906 16.765625 50 16.40625 L 50 0 L 33.59375 0 C 33.5625 0 33.53125 0 33.5 0 C 33.46875 0 33.4375 0 33.40625 0 Z M 2 10 C 1.476563 10 0.941406 10.183594 0.5625 10.5625 C 0.183594 10.941406 0 11.476563 0 12 L 0 48 C 0 48.523438 0.183594 49.058594 0.5625 49.4375 C 0.941406 49.816406 1.476563 50 2 50 L 38 50 C 38.523438 50 39.058594 49.816406 39.4375 49.4375 C 39.816406 49.058594 40 48.523438 40 48 L 40 18 C 40.003906 17.640625 39.816406 17.304688 39.503906 17.121094 C 39.191406 16.941406 38.808594 16.941406 38.496094 17.121094 C 38.183594 17.304688 37.996094 17.640625 38 18 L 38 48 L 2 48 L 2 12 L 32 12 C 32.359375 12.003906 32.695313 11.816406 32.878906 11.503906 C 33.058594 11.191406 33.058594 10.808594 32.878906 10.496094 C 32.695313 10.183594 32.359375 9.996094 32 10 Z" />
              </svg>
            </a>
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

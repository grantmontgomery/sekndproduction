import { sectionFooterSecondaryContent } from "aws-amplify";
import { PlacesPrice } from "./Parts/PlacesInfo";
import { ImageBackground } from "./Parts/ImageBackground";
import * as React from "react";
import css from "./ResultCard.module.scss";

export const ResultCard: React.FC<{ item: { [key: string]: any } }> = ({
  item,
}) => {
  const [state, setState] = React.useState({ added: false });

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

  const setCardDetails: () => JSX.Element = () => {
    switch (item.type) {
      case "place":
        return (
          <React.Fragment>
            <PlacesPrice price={["", "", ""]}></PlacesPrice>
            <div className={css.starsWrapper}></div>
          </React.Fragment>
        );
      case "event":
        return <React.Fragment></React.Fragment>;
    }
  };
  return (
    <div className={css.resultCard}>
      <ImageBackground
        source={determineImageBackgroundSource()}
        alt={item.name}
      ></ImageBackground>
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
      {setCardDetails()}
    </div>
  );
};

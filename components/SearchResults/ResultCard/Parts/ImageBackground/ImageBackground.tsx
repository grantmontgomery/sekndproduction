import * as React from "react";
import css from "./ImageBackground.module.scss";

export const ImageBackground: React.FC<{
  type: string;
  source: string;
  extended: boolean;
  imageLoaded: boolean;
  handleRetract: () => void;
}> = ({ extended, imageLoaded, handleRetract, type, source, children }) => {
  const [state, setState] = React.useState<{ loaded: boolean }>({
    loaded: false,
  });

  // const determineImageRatio: () => { width: string; height: string } = () => {
  //   switch (type) {
  //     case "event":
  //       return source === "yelp"
  //         ? { width: "100%", height: "auto" }
  //         : { width: "auto", height: "100%" };
  //     case "place":
  //       return { width: "100%", height: "auto" };

  //     default:
  //       return { width: "100%", height: "auto" };
  //   }
  // };

  const determineImageRatio: () => string = () => {
    return source === "yelp" ? css.byWidth : css.byWidth;
  };

  return (
    <div
      className={`${css.imgBackground} ${extended ? css.extended : null} ${
        imageLoaded ? css.loaded : css.loading
      }`}
      onClick={handleRetract}
    >
      {children}
    </div>
  );
};

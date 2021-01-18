import * as React from "react";
import css from "./Reviews.module.scss";

export const Reviews: React.FC<{ reviewCount: number; rating: number }> = ({
  reviewCount,
  rating,
}) => {
  if (reviewCount && rating) {
    React.useLayoutEffect(() => {
      setStars;
    }, []);

    const EmptyStar: (id: number) => JSX.Element = (id) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 263.08 251.53"
          className={css.emptyStar}
          // style={{ fill: "#707070" }}
          key={id}
        >
          <defs></defs>
          <title>Asset 10</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Tracing">
              <path d="M141.5,8.69l31.27,63.36a11.11,11.11,0,0,0,8.36,6.08l69.93,10.16a11.11,11.11,0,0,1,6.15,18.94l-50.6,49.32a11.09,11.09,0,0,0-3.19,9.83L215.36,236a11.1,11.1,0,0,1-16.11,11.7l-62.54-32.88a11.12,11.12,0,0,0-10.34,0L63.83,247.73A11.11,11.11,0,0,1,47.71,236l11.95-69.65a11.1,11.1,0,0,0-3.2-9.83L5.87,107.23A11.1,11.1,0,0,1,12,88.29L82,78.13a11.13,11.13,0,0,0,8.36-6.08L121.58,8.69A11.11,11.11,0,0,1,141.5,8.69Z" />
            </g>
          </g>
        </svg>
      );
    };

    const FullStar: (id: number) => JSX.Element = (id) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 258.08 246.53"
          // style={{ fill: "white" }}
          key={id}
          className={css.fullStar}
        >
          <defs></defs>
          <title>Asset 7</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Tracing">
              <path d="M139,6.19l31.27,63.36a11.11,11.11,0,0,0,8.36,6.08l69.93,10.16a11.11,11.11,0,0,1,6.15,18.94l-50.6,49.32a11.09,11.09,0,0,0-3.19,9.83l11.94,69.65a11.1,11.1,0,0,1-16.11,11.7l-62.54-32.88a11.12,11.12,0,0,0-10.34,0L61.33,245.23a11.11,11.11,0,0,1-16.12-11.7l11.95-69.65a11.1,11.1,0,0,0-3.2-9.83L3.37,104.73A11.1,11.1,0,0,1,9.52,85.79L79.45,75.63a11.13,11.13,0,0,0,8.36-6.08L119.08,6.19A11.11,11.11,0,0,1,139,6.19Z" />
            </g>
          </g>
        </svg>
      );
    };

    const HalfStar: (id: number) => JSX.Element = (id) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 263.07 251.54"
          key={id}
          className={css.halfStar}
        >
          <defs></defs>
          <title>Asset 11</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Tracing">
              <path
                className={css.blankHalf}
                // style={{ fill: "#707070" }}
                d="M206.61,156.56a11.11,11.11,0,0,0-3.19,9.83L215.36,236a11.1,11.1,0,0,1-16.11,11.71l-62.54-32.89a11.07,11.07,0,0,0-10.34,0L63.83,247.74A11.1,11.1,0,0,1,47.72,236l11.94-69.64a11.11,11.11,0,0,0-3.19-9.83L5.87,107.23A11.1,11.1,0,0,1,12,88.29L82,78.13a11.08,11.08,0,0,0,8.36-6.07L121.58,8.69a11.11,11.11,0,0,1,19.92,0l31.27,63.37a11.08,11.08,0,0,0,8.36,6.07l69.93,10.16a11.1,11.1,0,0,1,6.15,18.94Z"
              />
              <path
                className={css.fullHalf}
                // style={{
                //   fill: "white",
                // }}
                d="M132,2.51V213.58a11.19,11.19,0,0,0-5.67,1.27L63.83,247.74A11.1,11.1,0,0,1,47.72,236l11.94-69.64a11.11,11.11,0,0,0-3.19-9.83L5.87,107.23A11.1,11.1,0,0,1,12,88.29L82,78.13a11.08,11.08,0,0,0,8.36-6.07L121.58,8.69A11,11,0,0,1,132,2.51Z"
              />
            </g>
          </g>
        </svg>
      );
    };

    const setStars: () => JSX.Element[] = () => {
      let ratingInt: number = Math.floor(rating);
      let remainder: number = rating - ratingInt;
      const starTypes: JSX.Element[] = [
        EmptyStar(0),
        EmptyStar(1),
        EmptyStar(2),
        EmptyStar(3),
        EmptyStar(4),
      ];

      const newStars: JSX.Element[] = starTypes.map((item, index) => {
        if (index < ratingInt) {
          return FullStar(index);
        } else {
          return remainder > 0 && index < rating
            ? HalfStar(index)
            : EmptyStar(index);
        }
      });

      return newStars;
    };

    return (
      <div className={css.reviewWrapper}>
        <div className={css.starWrapper}>{setStars().map((star) => star)}</div>
        <span>{`${reviewCount} Reviews`}</span>
      </div>
    );
  } else {
    return null;
  }
};

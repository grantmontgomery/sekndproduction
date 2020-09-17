import * as React from "react";
import css from "./Review.module.scss";

export const Reviews: React.FC<{ reviewCount: number; rating: number }> = ({
  reviewCount,
  rating,
}) => {
  if (reviewCount && rating) {
    return (
      <div className={css.reviewWrapper}>
        <div className={css.starWrapper}></div>
        <span></span>
      </div>
    );
  } else {
    return null;
  }
};

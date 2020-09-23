import * as React from "react";
import css from "EventDescription.module.scss";

export const EventDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  let letters: RegExp = /^[A -Za-z]+$/;
  return description || description.search(letters) !== -1 ? (
    <p className={css.description}>{description}</p>
  ) : null;
};

import * as React from "react";
import css from "./EventDescription.module.scss";

export const EventDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  const unwantedCharacters: RegExp = /[*]/g;

  return (
    description && (
      <div className={css.descriptionWrapper}>
        <p className={css.description}>
          {description.search(unwantedCharacters) !== -1
            ? description.replace(unwantedCharacters, "")
            : description}
        </p>
      </div>
    )
  );
};

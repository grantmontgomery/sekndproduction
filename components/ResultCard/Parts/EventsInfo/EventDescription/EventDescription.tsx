import * as React from "react";
import css from "./EventDescription.module.scss";

export const EventDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <div className={css.descriptionWrapper}>
      <p className={css.description}>
        {description.search(/[*]/g) !== -1
          ? description.replace(/[*]/g, "")
          : description}
      </p>
    </div>
  );
};

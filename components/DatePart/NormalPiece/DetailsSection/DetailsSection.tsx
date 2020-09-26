import * as React from "react";
import {
  usePartsDispatch,
  usePartsState,
} from "../../../../state/DatePartsContext";
import css from "./DetailsSection.module.scss";

export const DetailsSection: React.FC<{
  id?: string;
  location?: string;
  price?: string;
  date?: string;
  details?: string;
}> = ({ location, price, date, id, details }) => {
  const dispatch = usePartsDispatch();
  const defineSections: () => JSX.Element = () => {
    if (!location && !price && !date) {
      return (
        <textarea
          className={css.customDetails}
          value={details}
          onChange={({ target }) =>
            dispatch({
              type: "CHANGE_CUSTOM_DETAIL",
              payload: { id, details: target.value },
            })
          }
        />
      );
    } else {
      return <p className={css.partDetails}></p>;
    }
  };
  return defineSections();
};

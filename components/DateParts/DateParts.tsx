import * as React from "react";
import { usePartsState, usePartsDispatch } from "../../state/DatePartsContext";
import css from "./DateParts.module.scss";
import { DatePart } from "../DatePart/DatePart";
export const DateParts: React.FC<{ location: string }> = ({ location }) => {
  const { parts } = usePartsState();
  const [state, setState] = React.useState<{ color: string }>({
    color: "linear-gradient(45deg, #155799, #159957)",
  });

  return (
    <div className={`${css.dateParts} ${css[location]}`}>
      <div className={css.partsWrapper}>
        <header>
          <label htmlFor="">Date Parts</label>
          <input
            type="text"
            placeholder="Another Idea?"
            className={css.partInput}
          />
          <div className={css.colorInput}>
            <button
              onClick={() =>
                setState({ color: "linear-gradient(45deg, #155799, #159957)" })
              }
            ></button>
            <button
              onClick={() =>
                setState({ color: "linear-gradient(45deg, #ee0979, #ff6a00)" })
              }
            ></button>
            <button
              onClick={() =>
                setState({ color: "linear-gradient(45deg, #799f0c, #ffe000)" })
              }
            ></button>
            <button
              onClick={() =>
                setState({ color: "linear-gradient(45deg, #333399, #ff00cc)" })
              }
            ></button>
            <button
              onClick={() =>
                setState({ color: "linear-gradient(45deg, #0f2027, #2c5364)" })
              }
            ></button>
          </div>
          <button
            className={css.add}
            style={{ color: "white", background: state.color }}
          >
            Add
          </button>
        </header>
        <div className={css.partsList}>
          <div className={css.partsInner}>
            {parts.map((part) => (
              <DatePart
                key={part.id}
                location={"list"}
                part={part}
                gridIndex={part.gridIndex}
              ></DatePart>
            ))}
          </div>
        </div>
      </div>
      <div className={css.modal}></div>
    </div>
  );
};

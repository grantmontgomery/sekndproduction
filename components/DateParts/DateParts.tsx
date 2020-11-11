import * as React from "react";
import { usePartsState, usePartsDispatch } from "../../state/DatePartsContext";
import css from "./DateParts.module.scss";
import { DatePart } from "../DatePart/DatePart";

export const DateParts: React.FC<{ location: string }> = ({ location }) => {
  const { parts } = usePartsState();
  const [state, setState] = React.useState<{ input: string; color: string }>({
    input: "",
    color: "linear-gradient(45deg, #ee0979, #ff6a00)",
  });

  const dispatch = usePartsDispatch();

  const handlePartSubmit: () => void = () => {
    if (state.input === "") return alert("Fill out input");
    return (
      dispatch({
        type: "ADD_PART",
        payload: {
          part: {
            name: state.input,
            color: state.color,
            type: "custom",
            details: "",
            id: `${name}${Math.random()}`,
          },
        },
      }),
      setState((state) => ({ ...state, input: "" }))
    );
  };

  return (
    <div className={`${css.dateParts} ${css[location]}`}>
      <div className={css.partsWrapper}>
        <header>
          <label htmlFor="">Date Parts</label>
          <input
            type="text"
            placeholder="Another Idea?"
            value={state.input}
            onChange={({ target }) =>
              setState((state) => ({ ...state, input: target.value }))
            }
            className={css.partInput}
          />
          <div className={css.colorInput}>
            <button
              onClick={() =>
                setState((state) => ({
                  ...state,
                  color: "linear-gradient(45deg, #799f0c, #ffe000)",
                }))
              }
            ></button>
            <button
              onClick={() =>
                setState((state) => ({
                  ...state,
                  color: "linear-gradient(45deg, #155799, #159957)",
                }))
              }
            ></button>
            <button
              onClick={() =>
                setState((state) => ({
                  ...state,
                  color: "linear-gradient(45deg, #ee0979, #ff6a00)",
                }))
              }
            ></button>
            <button
              onClick={() =>
                setState((state) => ({
                  ...state,
                  color: " linear-gradient(45deg, #333399, #ff00cc)",
                }))
              }
            ></button>
            <button
              onClick={() =>
                setState((state) => ({
                  ...state,
                  color: "linear-gradient(45deg, #0f2027, #2c5364)",
                }))
              }
            ></button>
          </div>
          <button
            className={css.add}
            style={{ color: "white", background: state.color }}
            onClick={handlePartSubmit}
          >
            Add
          </button>
        </header>
        <div className={css.partsList}>
          <div className={css.partsInner}>
            {parts.map((part) => (
              <DatePart
                key={part.id}
                location={location}
                part={part}
              ></DatePart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

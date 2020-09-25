import * as React from "react";
import css from "./NormalPiece.module.scss";
import { usePartsDispatch } from "../../../state/DatePartsContext";
import { PartImage } from "./PartImage";

export const NormalPiece: React.FC<{ part: { [key: string]: any } }> = ({
  part,
}) => {
  const [state, setState] = React.useState<{ extend: boolean }>({
    extend: false,
  });
  const dispatch = usePartsDispatch();
  const determineImageBackgroundSource: () => string = () => {
    switch (part.type) {
      case "place":
        return part.source === "yelp" ? part.image_url : null;
      case "event":
        return part.source === "yelp" ? part.image_url : part.images[0].url;
      default:
        return "";
    }
  };

  return (
    <div
      className={`${css.normalPiece} ${state.extend ? css.extended : null}`}
      onClick={() => setState({ extend: true })}
    >
      <PartImage
        type={part.type}
        color={part.type === "custom" ? part.color : null}
        image={determineImageBackgroundSource()}
      ></PartImage>
      <div className={css.partTitle}>
        <span>{part.name}</span>
        <button
          className={css.delete}
          onClick={() =>
            dispatch({ type: "REMOVE_PART", payload: { id: part.id } })
          }
        >
          X
        </button>
      </div>
    </div>
  );
};

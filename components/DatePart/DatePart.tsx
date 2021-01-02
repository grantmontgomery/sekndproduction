import * as React from "react";
import css from "./DatePart.module.scss";
import { DetailsSection } from "./DetailsSection";
import {
  useRectanglesDispatch,
  useRectanglesState,
} from "../../state/GridRectanglesContext";
import { usePartsDispatch } from "../../state/DatePartsContext";
import { PartImage } from "./PartImage";

export const DatePart: React.FC<{
  index?: number;
  location: string;
  part: { [key: string]: any };
  handleSelectedPartChange?: (selectedPart: { [key: string]: any }) => void;
  selectedID?: string | null;
}> = ({ part, location, handleSelectedPartChange, selectedID, index }) => {
  const [state, setState] = React.useState<{
    extend: boolean;
    imageLoaded: boolean;
  }>({
    extend: false,
    imageLoaded: false,
  });
  const [rendered, setRender] = React.useState<boolean>(false);
  const dispatch = usePartsDispatch();
  const determineImageBackgroundSource: () => string = () => {
    switch (part.type) {
      case "place":
        return part.source === "yelp" && part.image_url;
      case "event":
        return part.source === "yelp" ? part.image_url : part.images[0].url;
      default:
        return "";
    }
  };

  React.useEffect(() => {
    setTimeout(() => setRender(true), 1);
    return () => {
      clearTimeout();
    };
  }, []);

  const determinePartDetails: () => JSX.Element = () => {
    switch (part.type) {
      case "custom":
        return (
          <DetailsSection id={part.id} details={part.details}></DetailsSection>
        );
      case "event":
        const determineVenue: () => string | null = () => {
          switch (part.source) {
            case "yelp":
              return !part.businesess_id || part.business_id === null
                ? null
                : part.business_id;
            case "ticketmaster":
              return part._embedded.venues[0].name;
          }
        };

        const determinePrice: () =>
          | { [key: string]: any }
          | null
          | string = () => {
          switch (part.source) {
            case "yelp":
              if (!part.cost) return null;
              return part.cost;
            case "ticketmaster":
              if (!part.priceRanges) return null;
              return part.priceRanges[0];
          }
        };

        return (
          <DetailsSection
            location={determineVenue()}
            // price={determinePrice()}
          ></DetailsSection>
        );
      case "place":
        return;
      default:
        return null;
    }
  };

  const determineFilter: () => string = () => {
    if (location !== "schedule") return "none";
    if (!selectedID) return "grayscale";
    if (part.id === selectedID) {
      return "none";
    } else {
      return "grayscale";
    }
  };

  return (
    <div
      className={`${css.datePiece} ${state.extend && css.extended}`}
      onClick={() =>
        location !== "schedule"
          ? setState((state) => ({ ...state, extend: true }))
          : handleSelectedPartChange(part)
      }
      style={{
        filter: determineFilter(),
        opacity: rendered ? "1" : "0",
        transform: rendered ? "translate(0)" : "translate(15%)",
        transitionDelay: index && `${index * 125}ms`,
      }}
    >
      <PartImage
        type={part.type}
        color={part.type === "custom" && part.color}
        imageLoaded={state.imageLoaded}
      >
        <img
          src={determineImageBackgroundSource()}
          alt=""
          onLoad={() => setState((state) => ({ ...state, imageLoaded: true }))}
        />
      </PartImage>
      <div className={css.partTitle}>
        <span>{part.name}</span>
        {location !== "schedule" && (
          <button
            className={css.delete}
            onClick={() =>
              dispatch({ type: "REMOVE_PART", payload: { id: part.id } })
            }
          >
            X
          </button>
        )}
      </div>
      {state.extend && determinePartDetails()}
    </div>
  );
};

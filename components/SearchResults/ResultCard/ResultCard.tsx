import { PriceAndType, Reviews, Phone, Location } from "./Parts/PlacesInfo";
import {
  EventTimesVenue,
  EventPriceGenre,
  EventDescription,
} from "./Parts/EventsInfo";
import { PartLink } from "./Parts/PartLink";
import { ImageBackground } from "./Parts/ImageBackground";
import * as React from "react";
import {
  PartsProvider,
  usePartsDispatch,
  usePartsState,
} from "../../../state/DatePartsContext";
import css from "./ResultCard.module.scss";

export const ResultCard: React.FC<{ item: { [key: string]: any } }> = ({
  item,
}) => {
  const [state, setState] = React.useState({ added: false, moreInfo: false });

  const determineImageBackgroundSource: () => string = () => {
    switch (item.type) {
      case "place":
        return item.source === "yelp" ? item.image_url : null;
      case "event":
        return item.source === "yelp" ? item.image_url : item.images[0].url;
      default:
        return "";
    }
  };

  const handleRetract: () => void = () => {
    return state.moreInfo
      ? setState((state) => ({ ...state, moreInfo: false }))
      : null;
  };

  const moreDetails: (type: string) => JSX.Element | null = (type) => {
    if (!state.moreInfo) return null;
    switch (type) {
      case "place":
        return (
          <div className={css.detailsWrapper}>
            <Phone phone={item.phone}></Phone>
            <Location
              street={item.location.display_address[0]}
              city={item.location.display_address[1]}
            ></Location>
            <PartLink url={item.url} />
          </div>
        );
      case "event":
        return (
          <div className={css.detailsWrapper}>
            <EventDescription description={item.description}></EventDescription>
            <PartLink
              url={item.source === "yelp" ? item.event_site_url : item.url}
            />
          </div>
        );
      default:
        return <div className={css.detailsWrapper}></div>;
    }
  };

  const setCardDetails: () => JSX.Element = () => {
    switch (item.type) {
      case "place":
        return (
          <React.Fragment>
            <div
              className={`${css.infoBar} ${
                state.moreInfo ? css.extended : null
              }`}
            >
              <span className={css.title}>{item.name}</span>
              <Reviews
                reviewCount={item.review_count}
                rating={item.rating}
              ></Reviews>
              <PriceAndType
                price={item.price}
                city={item.location.city}
                state={item.location.state}
                type={
                  item.categories && item.categories.length > 0
                    ? item.categories[0].title
                    : null
                }
              ></PriceAndType>
              <div className={css.starsWrapper}></div>
            </div>
            {moreDetails("place")}
          </React.Fragment>
        );
      case "event":
        const determinePrice: () =>
          | { [key: string]: any }
          | null
          | string = () => {
          switch (item.source) {
            case "yelp":
              if (!item.cost) return null;
              return item.cost;
            case "ticketmaster":
              if (!item.priceRanges) return null;
              return item.priceRanges[0];
          }
        };

        const determineVenue: () => string | null = () => {
          switch (item.source) {
            case "yelp":
              return !item.businesess_id || item.business_id === null
                ? null
                : item.business_id;
            case "ticketmaster":
              return item._embedded.venues[0].name;
          }
        };

        const ticketmasterClassification: () => any | null = () => {
          return item.classifications ? item.classifications : null;
        };

        return (
          <React.Fragment>
            <div
              className={`${css.infoBar} ${
                state.moreInfo ? css.extended : null
              }`}
            >
              <span className={css.title}>{item.name}</span>
              <EventTimesVenue
                startTime={
                  item.source === "yelp"
                    ? item.time_start
                    : `${item.dates.start.localDate}T${item.dates.start.localTime}`
                }
                endTime={item.source === "yelp" ? item.time_end : null}
                source={item.source}
                venue={determineVenue()}
              ></EventTimesVenue>
              <EventPriceGenre
                venue={
                  item.source === "yelp"
                    ? item.business_id
                    : item._embedded.venues[0].name
                }
                price={determinePrice()}
                source={item.source}
                genre={
                  item.source === "yelp"
                    ? item.category
                    : ticketmasterClassification()
                }
              ></EventPriceGenre>
            </div>
            {moreDetails("event")}
          </React.Fragment>
        );
    }
  };

  const dispatch: React.Dispatch<{
    type: string;
    payload: { id?: string; part?: { [key: string]: any } };
  }> = usePartsDispatch();

  const handlePart: () => void = () => {
    if (state.added) {
      return (
        setState((state) => ({ ...state, added: false })),
        dispatch({ type: "REMOVE_PART", payload: { id: item.id } })
      );
    } else {
      return (
        setState((state) => ({ ...state, added: true })),
        dispatch({ type: "ADD_PART", payload: { part: item } })
      );
    }
  };

  return (
    <div
      className={`${css.resultCard} ${state.moreInfo ? css.extended : null}`}
      onClick={() =>
        state.moreInfo
          ? null
          : setState((state) => ({ ...state, moreInfo: true }))
      }
    >
      <ImageBackground
        image={determineImageBackgroundSource()}
        alt={item.name}
        extended={state.moreInfo}
        handleRetract={handleRetract}
        type={item.type}
        source={item.source}
      ></ImageBackground>

      <button
        className={`${css.addButton} ${state.added ? css.remove : null}`}
        onClick={(event) => (event.stopPropagation(), handlePart())}
      >
        {state.added ? "Remove from Parts -" : "Add to Parts +"}
      </button>
      {setCardDetails()}
    </div>
  );
};

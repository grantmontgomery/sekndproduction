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
import imageCSS from "./Parts/ImageBackground/ImageBackground.module.scss";

export const ResultCard: React.FC<{
  item?: { [key: string]: any };
  resultsLoading?: boolean;
}> = ({ item, resultsLoading }) => {
  const [state, setState] = React.useState<{
    added: boolean;
    moreInfo: boolean;
    imageLoaded: boolean;
  }>({ added: false, moreInfo: false, imageLoaded: false });

  const GlobalParts = usePartsState();

  React.useEffect(() => {
    if (item) {
      for (let i = 0; i < GlobalParts.parts.length; i++) {
        if (GlobalParts.parts[i].id === item.id) {
          setState((state) => ({ ...state, added: true }));
        }
      }
    }
  }, [GlobalParts]);

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

  const handleExtendRetract: () => void = () => {
    return state.moreInfo
      ? setState((state) => ({ ...state, moreInfo: false }))
      : setState((state) => ({ ...state, moreInfo: true }));
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
              style={{
                gridTemplateAreas: `"title" "reviews" "pricePlace" "moreDetails"`,
                gridTemplateRows: "auto auto auto auto",
              }}
              className={`${css.infoBar} ${
                state.moreInfo ? css.extended : null
              }`}
              onClick={() =>
                setState((state) => ({ ...state, moreInfo: true }))
              }
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
              <div className={css.landscapeDetails}>
                <Phone phone={item.phone}></Phone>
                <Location
                  street={item.location.display_address[0]}
                  city={item.location.display_address[1]}
                ></Location>
                <PartLink url={item.url} />
              </div>
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
              onClick={() =>
                setState((state) => ({ ...state, moreInfo: true }))
              }
              style={{
                gridTemplateAreas: `"title" "eventTimesVenue" "eventPriceGenre" "moreDetails"`,
              }}
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
              <div className={css.landscapeDetails}>
                <EventDescription
                  description={item.description}
                ></EventDescription>
                <PartLink
                  url={item.source === "yelp" ? item.event_site_url : item.url}
                />
              </div>
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
      return GlobalParts.parts.length < 7
        ? (setState((state) => ({ ...state, added: true })),
          dispatch({
            type: "ADD_PART",
            payload: { part: { ...item, gridIndex: null } },
          }))
        : null;
    }
  };

  return resultsLoading ? (
    <div className={css.resultCard} style={{ background: "#999999" }}>
      <div className={`${css.addButton} ${css.loadingAdd}`}></div>
      <div className={css.infoBar} style={{ background: "transparent" }}>
        <div className={css.loadingBar}></div>
        <div className={css.loadingBar}></div>
        <div className={css.loadingBar}></div>
        <div className={css.extraBar}></div>
        <div className={css.extraBar}></div>
      </div>
    </div>
  ) : (
    <div
      className={`${css.resultCard} ${state.moreInfo ? css.extended : null} ${
        state.imageLoaded ? css.loaded : css.loading
      }
      `}
    >
      {determineImageBackgroundSource() ? (
        <ImageBackground
          extended={state.moreInfo}
          handleExtendRetract={handleExtendRetract}
          type={item.type}
          source={item.source}
        >
          <img
            src={determineImageBackgroundSource()}
            className={
              item.source === "yelp"
                ? imageCSS.yelpImage
                : imageCSS.ticketmasterImage
            }
            alt={item.name}
            onLoad={() => setState({ ...state, imageLoaded: true })}
          />
        </ImageBackground>
      ) : null}

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

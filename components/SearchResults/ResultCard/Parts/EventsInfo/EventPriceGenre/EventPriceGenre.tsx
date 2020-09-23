import * as React from "react";
import css from "./EventPriceGenre.module.scss";
export const EventPriceGenre: React.FC<{
  venue: string;
  price: any;
  source: string;
  genre: any | null;
}> = ({ venue, price, source, genre }) => {
  const parsePrice: () => string = () => {
    switch (source) {
      case "yelp":
        if (!price) return "Check link for price.";
        return `Starting at $${price}.00`;
      case "ticketmaster":
        if (!price || !price.min) return "Check link for price";
        const truePrice: () => string = () => {
          if (price.min % 1 === 0) return `Starting at $${price.min}.00`;
          const priceString: string = price.min.toString();
          const decimalIndex: number = priceString.indexOf(".");
          const cents: string = priceString.substring(decimalIndex + 1);

          return `Starting at $${priceString.substring(0, decimalIndex)}.${
            cents.length > 1 ? cents : `${cents}0`
          }`;
        };
        return truePrice();
    }
  };

  const setVenue: () => JSX.Element | null = () => {
    if (source === "yelp") {
      if (genre.indexOf("-") !== -1 || genre.indexOf(" ") !== -1) {
        const characterSplit: string = genre.indexOf(" ") !== -1 ? " " : "-";
        const splitted: string[] = genre.split(characterSplit);
        const upperCase: string[] = splitted.map(
          (word) => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`
        );
        return <span className={css.genre}>{`• ${upperCase.join(" ")}`}</span>;
      } else {
        return (
          <span
            className={css.genre}
          >{`• ${genre[0].toUpperCase()}${genre.substring(1)}`}</span>
        );
      }
    }
    if (!genre) return null;
    let segmentString: string = "";
    let genreString: string = "";

    genre[0].segment ? (segmentString = genre[0].segment.name) : null;
    genre[0]["genre"] ? (genreString = genre[0]["genre"].name) : null;

    return (
      <span className={css.genre}>{`• ${segmentString} ${genreString}`}</span>
    );
  };

  return (
    <div className={css.eventPrice}>
      <span>{parsePrice()}</span>
      {setVenue()}
    </div>
  );
};

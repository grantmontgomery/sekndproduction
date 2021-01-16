import * as React from "react";
import css from "./EventPriceGenre.module.scss";
export const EventPriceGenre: React.FC<{
  venue: string;
  price: any;
  source: string;
  genre: any | null;
}> = ({ venue, price, source, genre }) => {
  const parsePrice = () => {
    switch (source) {
      case "yelp":
        return price ? `Starting at $${price}.00` : "Check link for price.";
      case "ticketmaster":
        if (!price?.min) return "Check link for price";
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

  const setGenre: () => JSX.Element | null = () => {
    if (source === "yelp") {
      if (genre.indexOf("-") === 1 || genre.indexOf(" ") === 1)
        return (
          <span
            className={css.genre}
          >{`• ${genre[0].toUpperCase()}${genre.substring(1)}`}</span>
        );
      const characterSplit: string = genre.indexOf(" ") !== -1 ? " " : "-";
      const splitted: string[] = genre.split(characterSplit);
      const upperCase: string[] = splitted.map(
        (word) => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`
      );
      return <span className={css.genre}>{`• ${upperCase.join(" ")}`}</span>;
    }

    return (
      <span className={css.genre}>{`• ${genre[0].segment ?? ""} ${
        genre[0]["genre"] ?? ""
      }`}</span>
    );
  };

  return (
    <div className={css.eventPrice}>
      <span>{parsePrice()}</span>
      {genre && setGenre()}
    </div>
  );
};

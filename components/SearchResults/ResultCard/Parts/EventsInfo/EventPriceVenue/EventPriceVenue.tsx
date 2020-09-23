import * as React from "react";
import css from "./EventPriceVenue.module.scss";
export const EventPriceVenue: React.FC<{
  venue: string;
  price: any;
  source: string;
}> = ({ venue, price, source }) => {
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

  return (
    <div className={css.eventPrice}>
      <span>{parsePrice()}</span>
    </div>
  );
};

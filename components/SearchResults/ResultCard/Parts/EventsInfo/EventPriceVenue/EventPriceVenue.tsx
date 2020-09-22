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
        return `Starting at $${price.min}.00`;
    }
  };
  console.log(
    source === "ticketmaster" ? `Ticketmaster ${price}` : `yelp ${price}`
  );
  return (
    <div className={css.eventPrice}>
      <span>{parsePrice()}</span>
    </div>
  );
};

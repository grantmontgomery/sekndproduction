import * as React from "react";
import css from "./EventsInput.module.scss";

export const EventsInput: React.FC = () => {
  return (
    <div className={css.events}>
      <label htmlFor="">What type of events are you looking for?</label>
      <select name="" id="">
        <optgroup>
          <option value="">Category (Optional)</option>
          <option value="All">All</option>
          <option value="Music">Music</option>
          <option value="Nightlife">Nightlife</option>
          <option value="Food & Drink">Food & Drink</option>
          <option value="Film">Film</option>
          <option value="Sports & Active Lifestyle">
            Sports & Active Lifestyle
          </option>
          <option value="Festivals & Fairs">Festivals & Fairs</option>
          <option value="Arts & Theatre">Arts & Theatre</option>
          <option value="Other">Other</option>
        </optgroup>
      </select>
    </div>
  );
};

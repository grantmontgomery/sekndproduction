import * as React from "react";
import css from "./NormalPiece.module.scss";
import { PartImage } from "./PartImage";

export const NormalPiece: React.FC<{ part: { [key: string]: any } }> = ({
  part,
}) => {
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
    <div className={css.normalPiece}>
      <PartImage
        type={part.type}
        image={determineImageBackgroundSource()}
      ></PartImage>
      <div className={css.partTitle}>
        <span>{part.name}</span>
      </div>
    </div>
  );
};

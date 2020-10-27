export const inputEventCategories: (
  eventType: string,
  source: string
) => { [key: string]: string[] } = (eventType, source) => {
  switch (eventType) {
    case "Music":
      return source === "yelp"
        ? { categories: ["music"] }
        : { segmentId: ["KZFzniwnSyZfZ7v7nJ"] };
    case "Arts & Theatre":
      return source === "yelp"
        ? { categories: ["visual-arts", "performing-arts"] }
        : { segmentId: ["KZFzniwnSyZfZ7v7na"] };
    case "Film":
      return source === "yelp"
        ? { categories: ["film"] }
        : { segmentId: ["KZFzniwnSyZfZ7v7nn"] };
    case "Sports & Active Lifestyle":
      return source === "yelp"
        ? { categories: ["sports-active-life"] }
        : { segmentId: ["KZFzniwnSyZfZ7v7nE"] };
    case "Food & Drink":
      return { categories: ["food-and-drink"] };
    case "Nightlife":
      return { categories: ["nightlife"] };
    case "Festivals & Fairs":
      return { categories: ["festivals-and-fairs"] };
    case "Misc":
      return source === "yelp"
        ? { categories: ["official-yelp-events"] }
        : { segmentId: ["KZFzniwnSyZfZ7v7n1"] };
    case "All":
      return source === "yelp" ? { categories: null } : { segmentId: null };

    default:
      return source === "yelp" ? { categories: null } : { segmentId: null };
  }
};

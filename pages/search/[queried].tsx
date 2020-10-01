import * as React from "react";
import { Layout, ResultCard, SekndLoader } from "../../components";
import {
  yelpBusinessesCall,
  yelpEventsCall,
  ticketMasterCall,
} from "../../apicalls";
import { NextRouter, useRouter } from "next/router";
import useSWR, { responseInterface } from "swr";
import css from "../../styles/Queried.module.scss";
import { ParsedUrlQuery } from "querystring";
import { SearchBox } from "../../components/SearchBox";

type Results = {
  items: { [key: string]: any }[];
  errors: {
    yelpPlacesError?: string | undefined;
    yelpEventsError?: string | undefined;
    ticketmasterError?: string | undefined;
  };
};

type APIResponse = { [key: string]: any }[];

type SearchParams = { [key: string]: any };

const QueryDisplay: React.FC<{
  loading: boolean;
  searchType: string;
  items?: Results["items"];
}> = ({ loading, items, searchType }) => {
  const [state, setState] = React.useState<{ resultsType: string }>({
    resultsType: "",
  });

  React.useEffect(() => {
    if (searchType === "EVENTS") setState({ resultsType: "EVENTS" });
    setState({ resultsType: "PLACES" });
  }, []);

  const setTypeButtons: () => JSX.Element = () => {
    if (searchType !== "ALL") return null;
    return (
      <React.Fragment>
        <button
          className={css.typeButton}
          onClick={() => setState({ resultsType: "PLACES" })}
        >
          Places
        </button>
        <button
          className={css.typeButton}
          onClick={() => setState({ resultsType: "EVENTS" })}
        >
          Events
        </button>
      </React.Fragment>
    );
  };

  const setItems: () => JSX.Element = () => {
    if (loading) return <SekndLoader></SekndLoader>;
    if (searchType === "ALL") {
      <div className={css.resultsSlider}>
        {state.resultsType === "PLACES"
          ? items
              ?.filter((item) => item.type === "place")
              .map((item) => (
                <ResultCard key={item.id} item={item}></ResultCard>
              ))
          : items
              ?.filter((item) => item.type === "event")
              .map((item) => (
                <ResultCard key={item.id} item={item}></ResultCard>
              ))}
      </div>;
    }

    return (
      <div className={css.resultsSlider}>
        {items?.map((item) => (
          <ResultCard key={item.id} item={item}></ResultCard>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <main className={css.queriedPage}>
        {/* <section className={css.queryDisplay}></section> */}
        <section className={css.header}>
          {setTypeButtons()}
          <button className={css.sort}>Sort</button>
        </section>
        {setItems()}
      </main>
    </Layout>
  );
};

export default function Queried(): JSX.Element {
  const [state, setState] = React.useState<{ loading: boolean }>({
    loading: true,
  });
  const [results, setResults] = React.useState<{ results: Results }>({
    results: {
      items: [],
      errors: {
        yelpEventsError: "",
        yelpPlacesError: "",
        ticketmasterError: "",
      },
    },
  });
  const router: NextRouter = useRouter();

  const urlStart: string =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://sekndapp.com";

  const setSearchParameters: () => { [key: string]: any } | null = () => {
    const { query } = router;
    if (!query.queried) return null;
    if (query.searchType) return query;

    const checkURLIsString: string = query.queried.toString();
    const paramValueArray: string[] = checkURLIsString.split("+");

    const SearchParams: SearchParams = {};

    paramValueArray.forEach((param) => {
      const indexOfEqual: number = param.search("=");
      if (indexOfEqual === -1) return;
      else {
        const paramKey: string = param.substring(0, indexOfEqual);
        const paramValue: string = param.substring(indexOfEqual + 1);
        SearchParams[paramKey] = paramValue;
      }
    });
    return SearchParams;
  };

  const {
    data: yelpPlaces,
    error: yelpPlacesError,
    isValidating: yelpPlacesLoading,
  }: responseInterface<APIResponse, string> = useSWR(
    (): string | null => {
      if (!setSearchParameters()) return null;
      return setSearchParameters().searchType !== "EVENTS"
        ? `${urlStart}/api/yelpBusinessesAPI`
        : null;
    },
    async (url) => {
      const { location, radius, placeType } = setSearchParameters();
      try {
        const response: Response = await fetch(url, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            location,
            radius: parseInt(radius),
            term: placeType,
          }),
        });

        const responseJSON = await response.json();

        const {
          businesses,
        }: { businesses: { [key: string]: any }[] } = responseJSON;
        businesses.forEach(
          (business) => (
            (business["type"] = "place"),
            (business["source"] = "yelp"),
            (business["inParts"] = false)
          )
        );

        return businesses;
      } catch (err) {
        return err.message;
      }
    }
  );

  const {
    data: yelpEvents,
    error: yelpEventsError,
    isValidating: yelpEventsLoading,
  }: responseInterface<APIResponse, string> = useSWR(
    (): string | null => {
      if (!setSearchParameters()) return null;
      return setSearchParameters().searchType !== "PLACES"
        ? `${urlStart}/api/yelpEventsAPI`
        : null;
    },
    async (url) => {
      const {
        location,
        radius,
        unixStartDate,
        unixEndDate,
      } = setSearchParameters();
      try {
        const response: Response = await fetch(url, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            location,
            radius: parseInt(radius),
            start_date: parseInt(unixStartDate),
            end_date: parseInt(unixEndDate),
          }),
        });

        const responseJSON = await response.json();

        const { events }: { events: { [key: string]: any }[] } = responseJSON;
        events.forEach(
          (event) => (
            (event["type"] = "event"),
            (event["source"] = "yelp"),
            (event["inParts"] = false)
          )
        );
        return events;
      } catch (err) {
        return err.message;
      }
    }
  );

  const {
    data: ticketmaster,
    error: ticketmasterError,
    isValidating: ticketmasterLoading,
  }: responseInterface<APIResponse, string> = useSWR(
    (): string | null => {
      if (!setSearchParameters()) return null;
      return setSearchParameters().searchType !== "PLACES"
        ? `${urlStart}/api/ticketmasterAPI`
        : null;
    },
    async (url) => {
      const {
        location,
        radius,
        startFormatted,
        endFormatted,
      } = setSearchParameters();
      try {
        const response: Response = await fetch(url, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            location,
            radius: Math.floor(parseInt(radius) * 0.001).toString(),
            startDateTime: startFormatted,
            endDateTime: endFormatted,
          }),
        });

        const responseJSON = await response.json();
        const {
          _embedded: { events },
        }: { _embedded: { events: { [key: string]: any }[] } } = responseJSON;

        events.forEach(
          (event) => (
            (event["source"] = "ticketmaster"),
            (event["type"] = "event"),
            (event["inParts"] = false)
          )
        );

        return events;
      } catch (err) {
        return err.message;
      }
    }
  );

  const checkYelpPlacesArray: Results["items"] | [] = Array.isArray(yelpPlaces)
    ? yelpPlaces
    : [];
  const checkYelpEventsArray: Results["items"] | [] = Array.isArray(yelpEvents)
    ? yelpEvents
    : [];
  const checkTicketMasterArray: Results["items"] | [] = Array.isArray(
    ticketmaster
  )
    ? ticketmaster
    : [];

  if (!setSearchParameters()) return <Layout></Layout>;

  switch (setSearchParameters().searchType) {
    case "ALL":
      if (yelpPlacesLoading || yelpEventsLoading || ticketmasterLoading) {
        return (
          <Layout>
            <main className={css.queriedPage}>
              {/* <section className={css.queryDisplay}></section> */}
              <section className={css.header}>
                <button className={css.sort}>Sort</button>
              </section>
              <SekndLoader></SekndLoader>
            </main>
          </Layout>
        );
      } else {
        const results: Results = {
          items: [
            ...checkYelpPlacesArray,
            ...checkYelpEventsArray,
            ...checkTicketMasterArray,
          ],
          errors: {
            yelpPlacesError,
            yelpEventsError,
            ticketmasterError,
          },
        };
        console.log(results);
        return (
          <Layout>
            <main className={css.queriedPage}>
              {/* <section className={css.queryDisplay}></section> */}
              <section className={css.header}>
                <button className={css.sort}>Sort</button>
              </section>

              <div className={css.resultsSlider}>
                {results.items.map((item) => (
                  <ResultCard key={item.id} item={item}></ResultCard>
                ))}
              </div>
            </main>
          </Layout>
        );
      }
    case "PLACES":
      if (yelpPlacesLoading) {
        return <Layout></Layout>;
      } else {
        const results: Results = {
          items: checkYelpPlacesArray,
          errors: {
            yelpPlacesError,
            yelpEventsError,
            ticketmasterError,
          },
        };
        return <Layout></Layout>;
      }
    case "EVENTS":
      if (ticketmasterLoading || yelpEventsLoading) {
        return <Layout></Layout>;
      } else {
        const results: Results = {
          items: [...checkYelpEventsArray, ...checkTicketMasterArray],
          errors: {
            yelpEventsError,
            ticketmasterError,
          },
        };
      }

    default:
      return <Layout></Layout>;
  }
}

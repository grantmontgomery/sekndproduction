import * as React from "react";
import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.min.css";
import { PageTransition } from "next-page-transitions";
import { SekndLoader } from "../components";
import Cookie from "js-cookie";
import { PartsProvider } from "../state/DatePartsContext";
import { GridProvider } from "../state/SearchGridContext";
import { SquaresProvider } from "../state/GridSquaresContext";

import { parseCookies } from "../cookies/parseCookies";
import { NextComponentType, NextPage, NextPageContext } from "next";
import { NextRouter } from "next/router";
import mitt from "next/dist/next-server/lib/mitt";

type InitialSquaresState = {
  squares: { part: { [key: string]: any } | null }[];
} | null;
type InitialGridState = { gridTemplate: string; hourStrings: string[] } | null;
type InitialPartsState = { parts: { [key: string]: any }[] | [] } | null;

type Props = {
  Component: NextComponentType;
  pageProps: NextPageContext;
  router: NextRouter;
  initialSquaresState: InitialSquaresState;
  initialGridState: InitialGridState;
  initialPartsState: InitialPartsState;
};

export default function App({
  Component,
  pageProps,
  router,
}: Props): JSX.Element {
  return (
    <SquaresProvider
      initialSquaresState={
        Cookie.get("squares") ? JSON.parse(Cookie.get("squares")) : null
      }
    >
      <GridProvider
        initialGridState={
          Cookie.get("grid") ? JSON.parse(Cookie.get("grid")) : null
        }
      >
        <PartsProvider
          initialPartsState={
            Cookie.get("parts") ? JSON.parse(Cookie.get("parts")) : null
          }
        >
          {/* <PageTransition
          timeout={400}
          loadingComponent={<SekndLoader></SekndLoader>}
          loadingDelay={500}
          loadingTimeout={{
            enter: 500,
            exit: 0,
          }}
          classNames="page-transition"
          loadingClassNames="loading-indicator"
        > */}
          <Component {...pageProps} key={router.route} />
          {/* </PageTransition> */}
          <style jsx global>{`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
            .loading-indicator-enter {
              opacity: 0;
            }
            .loading-indicator-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .loading-indicator-exit {
              opacity: 1;
            }
            .loading-indicator-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          `}</style>
        </PartsProvider>
      </GridProvider>
    </SquaresProvider>
  );
}

// App.getInitialProps = async ({ ctx: req }) => {
//   const { req: actualRequest } = req;

//   const cookieObject: { [key: string]: string } = parseCookies(actualRequest);
//   const { parts, grid, squares } = cookieObject;

//   const initialSquaresState: InitialSquaresState = squares
//     ? JSON.parse(squares)
//     : null;
//   const initialPartsState: InitialPartsState = parts ? JSON.parse(parts) : null;
//   const initialGridState: InitialGridState = grid ? JSON.parse(grid) : null;

//   return { initialSquaresState, initialPartsState, initialGridState };
// };

import * as React from "react";
import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.min.css";
import { PageTransition } from "next-page-transitions";
import { SekndLoader } from "../components";
import Cookie from "js-cookie";
import { PartsProvider } from "../state/DatePartsContext";
import { GridProvider } from "../state/SearchGridContext";
import { RectanglesProvider } from "../state/GridRectanglesContext";

import { parseCookies } from "../cookies/parseCookies";
import { NextComponentType, NextPage, NextPageContext } from "next";
import { NextRouter } from "next/router";
import mitt from "next/dist/next-server/lib/mitt";

type InitialrectanglesState = {
  rectangles: { part: { [key: string]: any } | null }[];
} | null;
type InitialGridState = { gridTemplate: string; hourStrings: string[] } | null;
type InitialPartsState = { parts: { [key: string]: any }[] | [] } | null;

type Props = {
  Component: NextComponentType;
  pageProps: NextPageContext;
  router: NextRouter;
  initialrectanglesState: InitialrectanglesState;
  initialGridState: InitialGridState;
  initialPartsState: InitialPartsState;
};

export default function App({
  Component,
  pageProps,
  router,
}: Props): JSX.Element {
  return (
    <RectanglesProvider
      initialRectanglesState={
        Cookie.get("rectangles") ? JSON.parse(Cookie.get("rectangles")) : null
      }
    >
      <GridProvider
        initialGridState={
          Cookie.get("grid") ? JSON.parse(Cookie.get("grid")) : null
        }
      >
        <PartsProvider>
          <PageTransition
            timeout={1000}
            loadingComponent={<SekndLoader></SekndLoader>}
            loadingDelay={1000}
            loadingTimeout={{
              enter: 1000,
              exit: 1000,
            }}
            classNames="page-transition"
            loadingClassNames="loading-indicator"
          >
            <Component {...pageProps} key={router.route} />
          </PageTransition>
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
    </RectanglesProvider>
  );
}

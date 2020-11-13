import * as React from "react";
import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.min.css";
import { PageTransition } from "next-page-transitions";
import { SekndLoader } from "../components/SekndLoader";
import Cookie from "js-cookie";
import { PartsProvider } from "../state/DatePartsContext";
import { GridProvider } from "../state/SearchGridContext";
import { RectanglesProvider } from "../state/GridRectanglesContext";
import { ModalProvider } from "../state/ModalContext";

import { NextComponentType, NextPage, NextPageContext } from "next";
import { NextRouter, Router } from "next/router";

type InitialrectanglesState = {
  rectangles: { part: { [key: string]: any } | null }[];
} | null;
type InitialGridState = { gridTemplate: string; hourStrings: string[] } | null;
type InitialPartsState = { parts: { [key: string]: any }[] | [] } | null;

type Props = {
  Component: NextComponentType;
  pageProps: NextPageContext;
  router: NextRouter;
};

export default function App({
  Component,
  pageProps,
  router,
}: Props): JSX.Element {
  const [loading, setLoading] = React.useState<boolean>(false);

  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () =>
    setTimeout(() => setLoading(false), 500)
  );

  console.log(loading);
  return (
    <ModalProvider>
      <RectanglesProvider>
        <GridProvider
          initialState={
            Cookie.get("grid") ? JSON.parse(Cookie.get("grid")) : null
          }
        >
          <PartsProvider>
            <PageTransition
              timeout={250}
              // loadingComponent={<SekndLoader></SekndLoader>}
              // loadingDelay={500}
              // loadingTimeout={{
              //   enter: 400,
              //   exit: 0,
              // }}
              classNames="page-transition"
              loadingClassNames="loading-indicator"
            >
              {loading ? (
                <SekndLoader></SekndLoader>
              ) : (
                <Component {...pageProps} key={router.route} />
              )}
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
              .loading-indicator-enter,
              .loading-indicator-appear {
                opacity: 0;
              }
              .loading-indicator-enter-active,
              .loading-indicator-appear {
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
    </ModalProvider>
  );
}

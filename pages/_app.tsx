import * as React from "react";
import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.min.css";
import { PageTransition } from "next-page-transitions";
import { SekndLoader } from "../components/SekndLoader";
import Cookies from "js-cookie";
import { useUserDispatch } from "../state/UserContext";
import css from "../styles/InitialLoader.module.scss";
import useLayoutEffect from "../logic/useIsomorphicLayoutEffect";
import { PartsProvider } from "../state/DatePartsContext";
import { GridProvider } from "../state/SearchGridContext";
import { RectanglesProvider } from "../state/GridRectanglesContext";
import { ModalProvider } from "../state/ModalContext";
import { UserProvider } from "../state/UserContext";
import { NextComponentType, NextPage, NextPageContext } from "next";
import { AppProps } from "next/app";
import { NextRouter, Router } from "next/router";

export default function App({
  Component,
  pageProps,
  router,
}: AppProps): JSX.Element {
  const [loading, setLoading] = React.useState<boolean>(false);

  // const gridCookieString = React.useRef<string | undefined>();

  React.useEffect(() => {
    const start: () => void = () => setLoading(true);
    const end: () => void = () => setTimeout(() => setLoading(false), 500);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
    };
  }, []);

  const gridCookieString = Cookies.get("grid");
  return (
    <UserProvider>
      <ModalProvider>
        <RectanglesProvider>
          <GridProvider
            initialState={
              gridCookieString ? JSON.parse(gridCookieString) : null
            }
          >
            <PartsProvider>
              <PageTransition
                timeout={250}
                classNames="page-transition"
                loadingClassNames="loading-indicator"
              >
                {loading ? (
                  <SekndLoader key={router.route}></SekndLoader>
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
    </UserProvider>
  );
}

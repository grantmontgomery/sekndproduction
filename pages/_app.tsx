import * as React from "react";
import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.min.css";
import { PageTransition } from "next-page-transitions";
import { SekndLoader } from "../components/SekndLoader";
import Cookie from "js-cookie";
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

type Props = {
  Component: NextComponentType;
  pageProps: NextPageContext;
  router: NextRouter;
};

type GridJSON = {
  hourStrings: string[];
  gridTemplate: string;
  startDate: Date | null;
  endDate: Date | null;
  hourStringsTrue: string[];
  numberOfSquares: number;
};

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

    // const cookieStringArray = document.cookie.split(";");

    // cookieStringArray.forEach((cookie) => {
    //   const gridCookieTitle = cookie.indexOf("grid=");
    //   if (gridCookieTitle !== -1)
    //     gridCookieString.current = cookie.substring(6);
    // });

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
    };
  }, []);

  const setInitialState = (): GridJSON | undefined => {
    const gridCookieString = Cookie.get("grid");

    return gridCookieString ? JSON.parse(gridCookieString) : undefined;
  };

  return (
    <UserProvider>
      <ModalProvider>
        <RectanglesProvider>
          <GridProvider initialState={setInitialState()}>
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

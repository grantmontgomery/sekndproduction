import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.min.css";
import { PageTransition } from "next-page-transitions";
import { SekndLoader } from "../components";
import { PartsProvider } from "../state/DatePartsContext";
import { GridProvider } from "../state/SearchGridContext";

import { Component } from "react";

function MyApp({ Component, pageProps, router }) {
  return (
    <GridProvider>
      <PartsProvider>
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
  );
}

export default MyApp;

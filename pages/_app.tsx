import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.min.css";
import { PageTransition } from "next-page-transitions";
import { SekndLoader } from "../components";
import { PartsProvider } from "../state/DatePartsContext";

import { Component } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <PartsProvider>
      <PageTransition
        timeout={400}
        loadingComponent={<SekndLoader></SekndLoader>}
        loadingDelay={500}
        loadingTimeout={{
          enter: 500,
          exit: 0,
        }}
      >
        <Component {...pageProps} />
      </PageTransition>
    </PartsProvider>
  );
}

export default MyApp;

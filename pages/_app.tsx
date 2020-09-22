import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.min.css";
import { PageTransition } from "next-page-transitions";
import { SekndLoader } from "../components";

import { Component } from "react";

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;

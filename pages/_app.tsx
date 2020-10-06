import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.min.css";
import App from "next/app";
import { PageTransition } from "next-page-transitions";
import Cookie from "js-cookie";
import { SekndLoader } from "../components";
import { PartsProvider } from "../state/DatePartsContext";
import { GridProvider } from "../state/SearchGridContext";
import { SquaresProvider } from "../state/GridSquaresContext";

import { Component } from "react";
// import { parseCookies } from "../cookies/parseCookies";

// function MyApp({ Component, pageProps, router }) {
//   return (
//     <SquaresProvider>
//       <GridProvider>
//         <PartsProvider>
//           {/* <PageTransition
//           timeout={400}
//           loadingComponent={<SekndLoader></SekndLoader>}
//           loadingDelay={500}
//           loadingTimeout={{
//             enter: 500,
//             exit: 0,
//           }}
//           classNames="page-transition"
//           loadingClassNames="loading-indicator"
//         > */}
//           <Component {...pageProps} key={router.route} />
//           {/* </PageTransition> */}
//           <style jsx global>{`
//             .page-transition-enter {
//               opacity: 0;
//             }
//             .page-transition-enter-active {
//               opacity: 1;
//               transition: opacity 300ms;
//             }
//             .page-transition-exit {
//               opacity: 1;
//             }
//             .page-transition-exit-active {
//               opacity: 0;
//               transition: opacity 300ms;
//             }
//             .loading-indicator-enter {
//               opacity: 0;
//             }
//             .loading-indicator-enter-active {
//               opacity: 1;
//               transition: opacity 300ms;
//             }
//             .loading-indicator-exit {
//               opacity: 1;
//             }
//             .loading-indicator-exit-active {
//               opacity: 0;
//               transition: opacity 300ms;
//             }
//           `}</style>
//         </PartsProvider>
//       </GridProvider>
//     </SquaresProvider>
//   );
// }

class MyApp extends App<{
  parts: { [key: string]: any }[];
  gridTemplate: string;
  hourStrings: string[];
  squares: { part: null | { [key: string]: any }[] };
}> {
  // static async getInitialProps() {

  //   return {};
  // }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <SquaresProvider>
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
      </SquaresProvider>
    );
  }
}

export default MyApp;

import Document, { Html, Head, Main, NextScript } from "next/document";
import { SekndLoader } from "../components";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="You've got the match, now set the perfect date. Find the best spots and events in town all in one place."
          />
          <meta
            name="author"
            content="Grant Montgomery 2020 | grantcreates.com"
          ></meta>
          <meta
            name="keywords"
            content="Seknd, Grant Montgomery, Make a Date, Grant Creates, React App"
          ></meta>
          <meta
            name="og:description"
            content="You've got the match, now set the perfect date. Find the best spots and events in town all in one place."
          ></meta>
          <meta
            name="og:image"
            title="main logo"
            content="/images/SekndSEOPic.png"
          ></meta>
          <meta name="og:title" content="Seknd"></meta>
          <meta name="og:url" content="https://sekndapp.com"></meta>
          <title>Seknd</title>
          <link rel="icon" href="/favicon.ico" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              const fadeLoaderOut = new Promise(res => setTimeout(() => {
                document.getElementById("initialLoader").style.opacity = "0"
                res()
              },250)) 
              const removeLoader = newPromise(res => setTimeout(() => {
                document.getElementById("initialLoader").remove()
                res()
              }, 500))
            
              window.addEventListener("load", async () => {
                await fadeLoaderOut
                await removeLoader
              })
            `,
            }}
          ></script>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
            }}
          />
        </Head>
        <body>
          <SekndLoader initial={true}></SekndLoader>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

import * as React from "react";
import Head from "next/head";
import { Layout } from "../components";
import css from "../styles/Home.module.scss";
import styles from "../styles/Home.module.css";
import { useGridState } from "../state/SearchGridContext";
import { stringify } from "querystring";

export default function Home(): JSX.Element {
  const [scroll, indicateScroll] = React.useState<boolean>(true);
  const [loadedElements, loadElements] = React.useState<{
    search: boolean;
    select: boolean;
    schedule: boolean;
  }>({
    search: false,
    select: false,
    schedule: false,
  });
  const observer: React.MutableRefObject<
    IntersectionObserver | undefined
  > = React.useRef();

  const introductionSection: React.MutableRefObject<
    HTMLElement | undefined
  > = React.useRef();

  const searchFeatureSection: React.MutableRefObject<
    HTMLElement | undefined
  > = React.useRef();
  const selectFeatureSection: React.MutableRefObject<
    HTMLElement | undefined
  > = React.useRef();
  const sheduleFeatureSection: React.MutableRefObject<
    HTMLElement | undefined
  > = React.useRef();

  // const loadSection:(statePiece:boolean) => JSX.Element|null = (statePiece) => {
  //   switch(statePiece){
  //     case loadedElements.search:
  //       if(loadedElements.search){
  //         const SearchFeatureComponent = React.lazy( async() => {
  //           try{
  //          const {SearchFeature} = await import("../components")
  //           return <SearchFeature></SearchFeature>
  //         }
  //         catch{

  //         }
  //       })

  //       }
  //       }
  //   }

  React.useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          switch (entry.target) {
            case introductionSection.current:
              if (entry.intersectionRatio < 0.9) {
                indicateScroll(false);
                observer.current.unobserve(introductionSection.current);
              }

            case searchFeatureSection.current:
              if (entry.intersectionRatio > 0.4) {
                loadElements((elements) => ({ ...elements, search: true }));
                observer.current.unobserve(searchFeatureSection.current);
              }
            case selectFeatureSection.current:
              if (entry.intersectionRatio > 0.4) {
                loadElements((elements) => ({ ...elements, select: true }));
                observer.current.unobserve(selectFeatureSection.current);
              }

            case sheduleFeatureSection.current:
              if (entry.intersectionRatio > 0.4) {
                loadElements((elements) => ({ ...elements, schedule: true }));
                observer.current.unobserve(sheduleFeatureSection.current);
              }
          }
        });
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );
    introductionSection.current = document.getElementById(
      "introductionSection"
    );
    searchFeatureSection.current = document.getElementById(
      "searchFeatureSection"
    );
    selectFeatureSection.current = document.getElementById(
      "selectFeatureSection"
    );
    sheduleFeatureSection.current = document.getElementById(
      "sheduleFeatureSection"
    );
    observer.current.observe(introductionSection.current);
    observer.current.observe(searchFeatureSection.current);
    observer.current.observe(selectFeatureSection.current);
    observer.current.observe(sheduleFeatureSection.current);
    return () => {
      observer.current.disconnect();
    };
  }, []);
  return (
    <Layout>
      <main className={css.homePage}>
        <section className={css.introduction} id="introductionSection">
          <h1>
            You've got the match,
            <br /> now set the perfect date.
          </h1>
          <div className={css.imagesWrapper}>
            <img src="/images/Laptop.png" alt="" />
            <img src="/images/Phone.png" alt="" />
          </div>
          <div
            className={css.scrollIndicator}
            style={{ opacity: scroll ? "1" : "0" }}
          >
            <h2>Get started</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 148.24 78.36"
              className={css.arrow}
            >
              <polygon points="74.12 78.36 0 4.24 4.24 0 74.12 69.88 144 0 148.24 4.24 74.12 78.36" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 148.24 78.36"
              className={css.arrow}
            >
              <polygon points="74.12 78.36 0 4.24 4.24 0 74.12 69.88 144 0 148.24 4.24 74.12 78.36" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 148.24 78.36"
              className={css.arrow}
            >
              <polygon points="74.12 78.36 0 4.24 4.24 0 74.12 69.88 144 0 148.24 4.24 74.12 78.36" />
            </svg>
          </div>
        </section>
        <section id="searchFeatureSection" className={css.featureSection}>
          {}
        </section>
        <section id="selectFeatureSection" className={css.featureSection}>
          <div className={css.imageWrapper}></div>
          <h1>Select</h1>
        </section>
        <section id="sheduleFeatureSection" className={css.featureSection}>
          <div className={css.imageWrapper}>
            <h1>Schedule</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}

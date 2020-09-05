import * as React from "react";
import Link from "next/link";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { MobileHamburger } from "../MobileHamburger";
import { MobileMenu } from "../MobileMenu";
import { DateParts } from "../DateParts";
import { SearchIcon } from "../SearchIcon";
import { SearchBox } from "../SearchBox";
import { NavLinks } from "../NavLinks";
import { PartsIcon } from "../PartsIcon";
import css from "./Nav.module.scss";

export type NavState = {
  [key: string]: boolean;
};

export const Nav: React.FC = () => {
  const [parts, displayParts] = React.useState<NavState>({ display: false });
  const [links, displayLinks] = React.useState<NavState>({ display: false });
  const [searchBox, displaySearchBox] = React.useState<NavState>({
    display: false,
  });
  const applyTransitions: (modalWindow: NavState) => JSX.Element | null = (
    modalWindow
  ) => {
    if (modalWindow === links) {
      return modalWindow.display ? (
        <CSSTransition
          timeout={250}
          classNames={{
            enter: `${css["links-enter"]}`,
            enterActive: `${css["links-enter-active"]}`,
            exit: `${css["links-exit"]}`,
            exitActive: `${css["links-exit-active"]}`,
          }}
        >
          <MobileMenu></MobileMenu>
        </CSSTransition>
      ) : null;
    } else if (modalWindow === parts) {
      return modalWindow.display ? (
        <CSSTransition
          timeout={250}
          classNames={{
            enter: `${css["parts-enter"]}`,
            enterActive: `${css["parts-enter-active"]}`,
            exit: `${css["parts-exit"]}`,
            exitActive: `${css["parts-exit-active"]}`,
          }}
        >
          <DateParts location="nav"></DateParts>
        </CSSTransition>
      ) : null;
    } else if (modalWindow === searchBox) {
      return modalWindow.display ? (
        <CSSTransition
          timeout={250}
          classNames={{
            enter: `${css["search-enter"]}`,
            enterActive: `${css["search-enter-active"]}`,
            exit: `${css["search-exit"]}`,
            exitActive: `${css["search-exit-active"]}`,
          }}
        >
          <SearchBox></SearchBox>
        </CSSTransition>
      ) : null;
    }
  };

  const applyModalTransitions: (element: string) => JSX.Element | null = (
    element
  ) => {
    if (element === "parts") {
      return parts.display ? (
        <CSSTransition
          timeout={250}
          classNames={{
            enter: `${css["search-enter"]}`,
            enterActive: `${css["search-enter-active"]}`,
            exit: `${css["search-exit"]}`,
            exitActive: `${css["search-exit-active"]}`,
          }}
        >
          <SearchBox></SearchBox>
        </CSSTransition>
      ) : null;
    } else if (element === "links") {
    } else if (element === "searchBox") {
    }
  };

  const stopWindowScroll: (stop: boolean) => void = (stop) => {
    const body: HTMLBodyElement | null = document.querySelector("body");
    console.log(body);
    if (body) {
      return stop
        ? (body.style.overflowY = "hidden")
        : (body.style.overflowY = "scroll");
    }
  };

  return (
    <React.Fragment>
      <nav className={css.nav}>
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 228.98 49.14"
            className={css.logoLink}
          >
            <title>AltLogoBlack</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Tracing">
                <path d="M17.66,49.14a31.52,31.52,0,0,1-4.74-.36,23.61,23.61,0,0,1-7.68-2.52A10,10,0,0,1,.14,41c-.72-2.1,1.5-4.74,3.66-3.66a4.41,4.41,0,0,1,1.26,1.32c2.16,2.64,5.52,3.78,8.76,4.32a22.83,22.83,0,0,0,7.86-.12c2.82-.6,5.52-2,6.6-4.8a6.31,6.31,0,0,0,.18-4.32c-1.38-4.08-6.48-5.58-10.8-6.48A45.6,45.6,0,0,1,9.2,24.78c-2.88-1.14-5.76-2.88-7.38-5.64-2-3.3-1.62-8.52-.42-11C5.06.84,12.14,0,16.28,0a25.19,25.19,0,0,1,8.94,1.56c3.3,1.26,5.88,3.42,6.66,5.7a2.85,2.85,0,0,1-.54,2.82,2.5,2.5,0,0,1-3.12.72,9,9,0,0,1-.84-.72,13.63,13.63,0,0,0-5.22-3.42,16.21,16.21,0,0,0-5.88-.78c-4.68,0-10,1.8-10,7.26,0,5,4.38,6.54,14.4,9C33.5,25.26,35.18,32.34,34,38.34,32.18,47.28,21.62,49.14,17.66,49.14Z" />
                <path d="M79.82,45.18a3,3,0,0,1-3,3H48.14a3,3,0,0,1-3-3V4a3,3,0,0,1,3-3H76.22a3,3,0,0,1,3,3,3,3,0,0,1-3,3H51.14V21.48h22.2a3,3,0,0,1,3,3,3,3,0,0,1-3,3H51.14v14.7H76.82A3,3,0,0,1,79.82,45.18Z" />
                <path d="M96.62,4V45.18a3,3,0,1,1-6,0V4a3,3,0,1,1,6,0Zm27.6,43.86a3.27,3.27,0,0,1-1.32.3,3,3,0,0,1-2.7-1.68,50.94,50.94,0,0,0-7.92-11.82c-3.54-3.78-6.24-6.6-10.32-8.94-.12-.06-.18-.12-.3-.18s-.24-.18-.36-.3a2.93,2.93,0,0,1-.78-1.62,3.11,3.11,0,0,1,.36-2,3.16,3.16,0,0,1,.72-.84l18.6-18.9a3,3,0,0,1,4.26.06,3,3,0,0,1-.06,4.2l-16.2,16.5c7.56,5.34,13.5,13.2,17.4,21.24A3,3,0,0,1,124.22,47.88Z" />
                <path d="M175.16,47.94a3.33,3.33,0,0,1-3.48-.78l-29-34.86V45.18a3,3,0,1,1-6,0V4A3,3,0,0,1,142,2.1l29,34.8V4a3,3,0,0,1,3-3,3,3,0,0,1,3,3V45.24A2.6,2.6,0,0,1,175.16,47.94Z" />
                <path d="M204.5,48.18H190.88a3,3,0,0,1-3.06-3V4a2.81,2.81,0,0,1,.9-2.1,3.2,3.2,0,0,1,2.16-.9h13.74A24.88,24.88,0,0,1,214,2.88a25.79,25.79,0,0,1,7.8,5.1,23.69,23.69,0,0,1,5.22,7.56A23.1,23.1,0,0,1,229,24.72a21.36,21.36,0,0,1-2,9,23.33,23.33,0,0,1-5.28,7.5,24.71,24.71,0,0,1-7.8,5.1A25.34,25.34,0,0,1,204.5,48.18Zm-10.62-6.06h10.74a19.81,19.81,0,0,0,7-1.44,18.31,18.31,0,0,0,5.88-3.78,19.75,19.75,0,0,0,4-5.64A15.49,15.49,0,0,0,223,24.72a16.58,16.58,0,0,0-1.44-6.78A18.61,18.61,0,0,0,204.62,7H193.88Z" />
              </g>
            </g>
          </svg>
        </Link>
        <NavLinks orientation="landscape"></NavLinks>

        <MobileHamburger
          displayLinks={displayLinks}
          links={links}
          stopWindowScroll={stopWindowScroll}
        ></MobileHamburger>

        <SearchIcon
          displaySearchBox={displaySearchBox}
          searchBox={searchBox}
          stopWindowScroll={stopWindowScroll}
        ></SearchIcon>
        <PartsIcon
          displayParts={displayParts}
          parts={parts}
          stopWindowScroll={stopWindowScroll}
        ></PartsIcon>
        <TransitionGroup>{applyTransitions(parts)}</TransitionGroup>
        <TransitionGroup>{applyTransitions(links)}</TransitionGroup>
      </nav>
      <TransitionGroup>{applyTransitions(searchBox)}</TransitionGroup>
    </React.Fragment>
  );
};

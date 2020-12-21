import * as React from "react";
import { PriceFilter } from "../PriceFilter";
import { PlacesPriceFilter } from "../PlacesPriceFilter";
import { EventsPriceFilter } from "../EventsPriceFilter";
import css from "./ResultsFilter.module.scss";

export const ResultsFilter: React.FC<{
  handlePriceChange: (input: string) => void;
  resultsType: string;
  searchParams: { [key: string]: any } | null;
  resultsLoading: boolean;
  handleResultsTypeChange: (input: string) => void;
}> = ({
  resultsType,
  resultsLoading,
  handleResultsTypeChange,
  searchParams,
  handlePriceChange,
}) => {
  return (
    <section className={css.filterSection}>
      <div className={css.typeButtonsWrapper}>
        <div
          className={`${css.buttonWrapper} ${
            resultsType === "places" ? css.selected : null
          }`}
          onClick={() => handleResultsTypeChange("places")}
        >
          <svg
            height="512pt"
            viewBox="-63 0 512 512.00026"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="PLACES"
              d="m386.640625 4.683594c-1.582031-3.855469-5.996094-5.699219-9.851563-4.117188-44.726562 18.363282-80.808593 49.921875-104.4375 89.832032h-260.015624c-10.308594 0-16.164063 12.070312-9.5 20.171874 164.617187 199.570313 153.222656 187.136719 161.671874 192.632813v87.15625c0 4.167969 3.382813 7.546875 7.550782 7.546875 4.164062 0 7.546875-3.378906 7.546875-7.546875v-80.726563c6.378906 1.488282 13.128906 1.617188 19.628906.363282v137.554687c-11.289063-3.957031-8.1875-4.011719-19.628906 0v-26.996093c0-4.167969-3.382813-7.546876-7.546875-7.546876-4.167969 0-7.550782 3.378907-7.550782 7.546876v32.28125l-109.746093 38.460937c-11.257813 3.953125-8.484375 20.703125 3.523437 20.703125h262.269532c12.027343 0 14.757812-16.757812 3.519531-20.703125l-59.777344-20.949219c-3.9375-1.378906-8.242187.695313-9.621094 4.621094-1.378906 3.9375.691407 8.246094 4.628907 9.625l35.117187 12.308594h-210.015625c.003906 0 105.011719-36.789063 105.011719-36.789063 19.40625 6.808594 1.128906.394531 41.382812 14.492188 3.933594 1.378906 8.242188-.691407 9.621094-4.628907 1.378906-3.925781-.695313-8.234374-4.628906-9.613281l-21.460938-7.519531v-148.585938c9.050781-5.375 10.914063-8.859374 34.445313-37.695312 2.636718-3.230469 2.152344-7.980469-1.078125-10.617188-3.230469-2.636718-7.980469-2.15625-10.621094 1.074219-23.898437 29.28125-21.878906 26.828125-22.746094 27.832031-11.640625 13.285157-34.421875 16.652344-49.824219-2.011718l-88.28125-107.027344h131.785157c3.417969 19.417969 20.398437 34.222656 40.78125 34.222656 20.382812 0 37.359375-14.804687 40.777343-34.222656h13.769532l-47.175782 57.808594c-2.625 3.230468-2.152343 7.988281 1.078126 10.617187 3.230468 2.636719 7.992187 2.152344 10.628906-1.066406l108.246094-132.652344c6.585937-8.0625.769531-20.121093-9.542969-20.121093h-76.433594c21.53125-32.914063 53.078125-59.726563 92.382813-75.863282 3.859374-1.582031 5.699218-5.992187 4.117187-9.851562zm-178.5 156.03125h-144.367187l-45.546876-55.21875h245.996094c-4.933594 10.144531-7.738281 18.066406-9.054687 22.199218-22.238281-3.453124-42.84375 11.457032-47.027344 33.019532zm65.753906 0h-50.207031c7.722656-24.472656 42.484375-24.472656 50.207031 0zm-50.414062 15.097656h50.621093c-7.230468 25.398438-43.382812 25.421875-50.621093 0zm137.242187-70.316406-45.0625 55.21875h-26.21875c-2.320312-11.957032-9.800781-22.085938-20.023437-27.984375 1.28125-4.066407 4.828125-14.238281 11.769531-27.234375zm0 0"
            />
          </svg>
          <span>Places</span>
        </div>
        {(searchParams && searchParams.searchType !== "PLACES") ||
        resultsLoading ? (
          <div
            className={`${css.buttonWrapper} ${
              resultsType === "events" ? css.selected : null
            }`}
            onClick={() => handleResultsTypeChange("events")}
          >
            <svg
              height="512pt"
              viewBox="0 0 512 512"
              width="512pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="EVENTS"
                d="m481.941406 386.753906v-30.058594h-42.582031v15.03125h27.550781v15.027344h-155.300781v-15.027344h112.71875v-15.03125h-92.679687v-118.882812l139.203124-156.9375c4.808594-5.425781 7.460938-12.398438 7.460938-19.632812 0-9.492188-4.589844-18.472657-12.277344-24.027344-5.078125-3.667969-11.070312-5.605469-17.324218-5.605469-8.515626 0-16.617188 3.664063-22.238282 10.046875l-32.707031 37.152344 11.28125 9.929687 32.707031-37.152343c2.765625-3.144532 6.761719-4.945313 10.957032-4.945313 3.074218 0 6.023437.953125 8.527343 2.761719 3.839844 2.773437 6.042969 7.089844 6.042969 11.839844 0 3.554687-1.304688 6.984374-3.671875 9.660156l-77.765625 87.667968-21.535156-19.003906 34.808594-39.546875-11.28125-9.929687-67.105469 76.234375h-31.171875v-18.132813c6.761718-4.609375 12.394531-10.761718 16.398437-17.9375h9.152344c15.191406 0 27.550781-12.359375 27.550781-27.554687v-20.039063c0-45.578125-37.082031-82.660156-82.660156-82.660156s-82.660156 37.082031-82.660156 82.660156v20.039063c0 15.195312 12.359375 27.554687 27.550781 27.554687h9.152344c4.003906 7.175782 9.636719 13.328125 16.398437 17.9375v19.269532l-27.359375 4.496093 2.441407 14.832031 29.214843-4.804687c6.347657 7.203125 15.464844 11.394531 25.261719 11.394531 10.082031 0 19.460938-4.429687 25.824219-12.023437h41.699219l26.851562-30.507813 21.496094 18.96875-55.253906 62.289063v124.589843h-20.039063v30.058594h-81.15625v-30.058594h-20.039063v-114.222656h-15.761718l-13.800782 37.457032-27.316406-11.054688 21.335938-58.433594c4.027344-11.027344 13.722656-19.058594 25.304687-20.960937l1.546875-.257813-2.4375-14.828125-1.546875.253907c-16.929687 2.78125-31.101562 14.523437-36.984375 30.636718l-55.292968 151.410156h-60.371094v30.058594h-30.058594v125.246094h94.683594v-15.03125h-79.652344v-95.183594h481.9375v95.183594h-387.253906v15.03125h402.285156v-125.246094zm-188.367187-295.722656-15.800781-20.894531h-57.191407c5.167969-14.578125 19.089844-25.046875 35.417969-25.046875 20.71875 0 37.574219 16.851562 37.574219 37.570312zm30.058593 11.667969c0 6.90625-5.617187 12.527343-12.523437 12.527343h-3.566406c.695312-3.402343 1.058593-6.921874 1.058593-10.523437 0 0-.023437-23.714844-.0625-24.546875h2.570313c6.90625 0 12.523437 5.617188 12.523437 12.523438zm-67.632812-87.667969c32.011719 0 58.878906 22.359375 65.855469 52.277344-3.304688-1.402344-6.9375-2.179688-10.746094-2.179688h-5.523437c-7.238282-20.410156-26.726563-35.070312-49.585938-35.070312s-42.347656 14.660156-49.585938 35.070312h-5.523437c-3.808594 0-7.441406.777344-10.746094 2.179688 6.976563-29.917969 33.84375-52.277344 65.855469-52.277344zm-55.109375 100.195312c-6.90625 0-12.523437-5.621093-12.523437-12.527343v-10.019531c0-6.90625 5.617187-12.523438 12.523437-12.523438h2.570313c-.039063.832031-.0625 24.546875-.0625 24.546875 0 3.601563.363281 7.121094 1.058593 10.523437zm17.535156-10.523437v-19.535156h51.871094l22.027344 29.136719c-4.25 16.082031-18.921875 27.972656-36.324219 27.972656-20.71875 0-37.574219-16.855469-37.574219-37.574219zm37.574219 73.644531c-5.707031 0-10.996094-2.5625-14.527344-6.933594v-16.164062c4.617188 1.328125 9.488282 2.058594 14.527344 2.058594s9.910156-.730469 14.527344-2.058594v16.164062c-3.53125 4.371094-8.820313 6.933594-14.527344 6.933594zm-75.648438 105.617188v72.730468h-26.796874zm-47.007812-.964844 27.277344 11.039062-23.082032 62.65625h-31.109374zm-88.253906 88.726562h155.300781v15.027344h-155.300781zm0 0"
              />
              <path
                id="EVENTS"
                d="m173.339844 421.824219v55.105469h165.320312v-55.105469zm100.195312 15.027343v25.050782h-35.070312v-25.050782zm-85.167968 0h35.070312v25.050782h-35.070312zm135.265624 25.050782h-35.070312v-25.050782h35.070312zm0 0"
              />
              <path
                id="EVENTS"
                d="m143.28125 471.921875h-15.03125v-15.03125h15.03125zm0-30.058594h-15.03125v-15.03125h15.03125zm0 0"
              />
              <path
                id="EVENTS"
                d="m383.75 471.921875h-15.03125v-15.03125h15.03125zm0-30.058594h-15.03125v-15.03125h15.03125zm0 0"
              />
              <path
                id="EVENTS"
                d="m300.585938 314.113281h-15.027344v-15.027343h15.027344zm0-30.058593h-15.027344v-40.078126h15.027344zm0 0"
              />
            </svg>
            <span>Events</span>
          </div>
        ) : null}
      </div>
      <div className={css.searchFilters}></div>
      {resultsType === "places" ? (
        <PlacesPriceFilter
          handlePriceChange={handlePriceChange}
        ></PlacesPriceFilter>
      ) : (
        <EventsPriceFilter
          handlePriceChange={handlePriceChange}
        ></EventsPriceFilter>
      )}
    </section>
  );
};

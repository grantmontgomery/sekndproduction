import * as React from "react";
import { Layout, ResultCard } from "../../components";
import {
  yelpBusinessesCall,
  yelpEventsCall,
  ticketMasterCall,
} from "../../apicalls";
import { useRouter } from "next/router";
import css from "../../styles/Queried.module.scss";

export default function Queried(): JSX.Element {
  const [state, setState] = React.useState({ resultsType: "" });

  const router = useRouter();
  console.log(router);

  return <Layout></Layout>;
}

// export default function Queried({
//   results: { items, errors },
//   searchType,
// }): JSX.Element {
//   const [state, setState] = React.useState({ resultsType: "" });

//   const router = useRouter();
//   console.log(router);

//   console.log(items);

//   const determineItems: () => JSX.Element | null = () => {
//     if (!items) return null;
//     switch (searchType) {
//       case "ALL":
//         if (Array.isArray(items.places) && Array.isArray(items.events)) {
//           return state.resultsType === "PLACES"
//             ? items.places.map((item) => (
//                 <ResultCard key={item.id} item={item}></ResultCard>
//               ))
//             : items.events.map((item) => (
//                 <ResultCard key={item.id} item={item}></ResultCard>
//               ));
//         } else {
//           return null;
//         }

//       case "PLACES":
//         return Array.isArray(items.places)
//           ? items.places.map((item) => (
//               <ResultCard key={item.id} item={item}></ResultCard>
//             ))
//           : null;
//       case "EVENTS":
//         return Array.isArray(items.events)
//           ? items.events.map((item) => (
//               <ResultCard key={item.id} item={item}></ResultCard>
//             ))
//           : null;
//       default:
//         if (Array.isArray(items.places) && Array.isArray(items.events)) {
//           return state.resultsType === "PLACES"
//             ? items.places.map((item) => (
//                 <ResultCard key={item.id} item={item}></ResultCard>
//               ))
//             : items.events.map((item) => (
//                 <ResultCard key={item.id} item={item}></ResultCard>
//               ));
//         } else {
//           return null;
//         }
//     }
//   };

//   const setTypeButtons: () => JSX.Element = () => {
//     if (searchType) {
//       switch (searchType) {
//         case "ALL":
//           return (
//             <React.Fragment>
//               <button
//                 className={css.typeButton}
//                 onClick={() => setState({ resultsType: "PLACES" })}
//               >
//                 Places
//               </button>
//               <button
//                 className={css.typeButton}
//                 onClick={() => setState({ resultsType: "EVENTS" })}
//               >
//                 Events
//               </button>
//             </React.Fragment>
//           );
//         case "PLACES":
//           return (
//             <button
//               className={css.typeButton}
//               onClick={() => setState({ resultsType: "PLACES" })}
//             >
//               Places
//             </button>
//           );

//         case "EVENTS":
//           return (
//             <button
//               className={css.typeButton}
//               onClick={() => setState({ resultsType: "EVENTS" })}
//             >
//               Events
//             </button>
//           );
//         default:
//           return (
//             <React.Fragment>
//               <button
//                 className={css.typeButton}
//                 onClick={() => setState({ resultsType: "PLACES" })}
//               >
//                 Places
//               </button>
//               <button
//                 className={css.typeButton}
//                 onClick={() => setState({ resultsType: "EVENTS" })}
//               >
//                 Events
//               </button>
//             </React.Fragment>
//           );
//       }
//     } else {
//       return (
//         <React.Fragment>
//           <button
//             className={css.typeButton}
//             onClick={() => setState({ resultsType: "PLACES" })}
//           >
//             Places
//           </button>
//           <button
//             className={css.typeButton}
//             onClick={() => setState({ resultsType: "EVENTS" })}
//           >
//             Events
//           </button>
//         </React.Fragment>
//       );
//     }
//   };

//   return (
//     <Layout>
//       <main className={css.queriedPage}>
//         {/* <section className={css.queryDisplay}></section> */}
//         <section className={css.header}>
//           {setTypeButtons()}
//           <button className={css.sort}>Sort</button>
//         </section>

//         <div className={css.resultsSlider}>{determineItems()}</div>
//       </main>
//     </Layout>
//   );
// }

// type Results = {
//   items: { places: { [key: string]: any }[]; events: { [key: string]: any }[] };
//   errors: { yelpPlaces: string; yelpEvents: string; ticketmaster: string };
// };

// type APIResponse = Promise<{ [key: string]: any }[] | string>;

// type SearchParams = { [key: string]: any };

// Queried.getInitialProps = async ({
//   query,
//   pathname,
//   asPath,
// }): Promise<{
//   results: any;
//   searchType: string;
// }> => {
//   const {
//     searchType,
//     location,
//     radius,
//     placeType,
//     startFormatted,
//     endFormatted,
//     unixStartDate,
//     unixEndDate,
//     eventsCategory,
//   } = query;

//   if (location && radius && startFormatted && endFormatted) {
//     console.log("api call");
//     class APICalls {
//       searchParams: SearchParams;
//       results: Results;
//       constructor(searchParams: SearchParams) {
//         this.searchParams = searchParams;
//         this.results = {
//           items: { places: [], events: [] },
//           errors: { yelpPlaces: "", yelpEvents: "", ticketmaster: "" },
//         };
//       }

//       public async yelpBusinesses() {
//         const { location, radius, placeType } = this.searchParams;
//         const yelpBusinessesResponse: APIResponse = await yelpBusinessesCall({
//           location,
//           radius,
//           placeType,
//         });
//         Array.isArray(yelpBusinessesResponse)
//           ? (this.results.items.places = yelpBusinessesResponse)
//           : (this.results.errors.yelpPlaces = `${yelpBusinessesResponse}`);
//       }
//       public async yelpEvents() {
//         const {
//           location,
//           radius,
//           unixStartDate,
//           unixEndDate,
//         } = this.searchParams;
//         const yelpEventsResponse: APIResponse = await yelpEventsCall({
//           location,
//           radius,
//           unixStartDate,
//           unixEndDate,
//         });
//         Array.isArray(yelpEventsResponse)
//           ? (this.results.items.events = [
//               ...this.results.items.events,
//               ...yelpEventsResponse,
//             ])
//           : (this.results.errors.yelpEvents = `${yelpEventsResponse}`);
//       }
//       public async ticketMaster() {
//         const {
//           location,
//           radius,
//           startFormatted,
//           endFormatted,
//         } = this.searchParams;
//         const ticketMasterResponse: APIResponse = await ticketMasterCall({
//           location,
//           radius,
//           startFormatted,
//           endFormatted,
//         });
//         Array.isArray(ticketMasterResponse)
//           ? (this.results.items.events = [
//               ...this.results.items.events,
//               ...ticketMasterResponse,
//             ])
//           : (this.results.errors.ticketmaster = `${ticketMasterResponse}`);
//       }
//     }

//     const callAPIS: (searchType: string) => Promise<Results> = async (
//       searchType
//     ) => {
//       const APICall = new APICalls({
//         location,
//         radius,
//         placeType,
//         startFormatted,
//         endFormatted,
//         unixStartDate,
//         unixEndDate,
//         eventsCategory,
//       });

//       try {
//         switch (searchType) {
//           case "PLACES":
//             APICall.yelpBusinesses();

//             return APICall.results;

//           case "EVENTS":
//             APICall.yelpEvents();
//             APICall.ticketMaster();
//             return APICall.results;
//           case "ALL":
//             APICall.yelpBusinesses();
//             APICall.yelpEvents();
//             APICall.ticketMaster();
//             return APICall.results;
//           default:
//             APICall.yelpBusinesses();
//             APICall.yelpEvents();
//             APICall.ticketMaster();
//             return APICall.results;
//         }
//       } catch {
//         APICall.results.errors.yelpPlaces = "CALL ERROR";
//         APICall.results.errors.yelpEvents = "CALL ERROR";
//         APICall.results.errors.ticketmaster = "CALL ERROR";
//         return APICall.results;
//       }
//     };

//     const results: Results = await callAPIS(searchType);

//     return {
//       results,
//       searchType,
//     };
//   } else {
//     const checkURLIsString: string = query.queried.toString();
//     const paramValueArray: string[] = checkURLIsString.split("+");

//     const searchParamsValues: SearchParams = {};

//     paramValueArray.forEach((param) => {
//       const indexOfEqual: number = param.search("=");
//       if (indexOfEqual === -1) return;
//       else {
//         const paramKey: string = param.substring(0, indexOfEqual);
//         const paramValue: string = param.substring(indexOfEqual + 1);
//         searchParamsValues[paramKey] = paramValue;
//       }
//     });

//     return {
//       results: { error: "BadCall" },
//       searchType: "ALL",
//     };
//   }
// };

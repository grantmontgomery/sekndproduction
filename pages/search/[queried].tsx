import * as React from "react";
import { GetServerSideProps } from "next";
import { Layout } from "../../components";
<<<<<<< Updated upstream

export default function Queried(props) {
  console.log(props);
  return (
    <React.Fragment>
      <Layout></Layout>
      <main></main>
=======
import { yelpBusinessesCall } from "../../components/SearchBox/APICalls";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { parse } from "path";

export default function Queried({ businesses }) {
  console.log(businesses);
  return (
    <React.Fragment>
      <Layout></Layout>
>>>>>>> Stashed changes
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
<<<<<<< Updated upstream
  const {
    yelpBusinessesAPI,
  }: {
    yelpBusinessesAPI: ({}: { [key: string]: string }) => Error | Promise<any>;
  } = require("../../apicalls/yelpBusinessesAPI");

=======
>>>>>>> Stashed changes
  const checkURLIsString: string = params.queried.toString();
  const paramValueArray: string[] = checkURLIsString.split("+");

  const searchParamsValues: { [key: string]: string } = {};

  paramValueArray.forEach((param) => {
    const indexOfEqual: number = param.search("=");
    if (indexOfEqual === -1) return;
    else {
      const paramKey: string = param.substring(0, indexOfEqual);
      const paramValue: string = param.substring(indexOfEqual + 1);
      searchParamsValues[paramKey] = paramValue;
    }
  });

<<<<<<< Updated upstream
  const results = await yelpBusinessesAPI(searchParamsValues);

  return {
    props: { results },
  };
=======
  return yelpBusinessesCall(searchParamsValues);
>>>>>>> Stashed changes
};

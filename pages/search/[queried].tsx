import * as React from "react";
import { GetServerSideProps } from "next";
import { Layout } from "../../components";

export default function Queried(props) {
  console.log(props);
  return (
    <React.Fragment>
      <Layout></Layout>
      <main></main>
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const {
    yelpBusinessesAPI,
  }: {
    yelpBusinessesAPI: ({}: { [key: string]: string }) => Error | Promise<any>;
  } = require("../../apicalls/yelpBusinessesAPI");

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

  const results = await yelpBusinessesAPI(searchParamsValues);

  return {
    props: { results },
  };
};

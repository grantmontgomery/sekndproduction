import * as React from "react";
import { Layout } from "../../components";
import { yelpBusinessesCall } from "../../apicalls/yelpBusinessesCall";

export default function Queried(props) {
  console.log(props);
  return (
    <React.Fragment>
      <Layout></Layout>
    </React.Fragment>
  );
}

Queried.getInitialProps = async ({ query }) => {
  const checkURLIsString: string = query.queried.toString();
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

  const callResponse = await yelpBusinessesCall(searchParamsValues);

  return { props: { results: callResponse } };
};

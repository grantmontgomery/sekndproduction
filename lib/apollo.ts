import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  useApolloClient,
} from "@apollo/client";
import { schema } from "../graphqlSetUp/schemas";
import { useMemo } from "react";
import fetch from "isomorphic-unfetch";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createIsomorphicLink(cookie) {
  if (typeof window === "undefined") {
    const { SchemaLink } = require("@apollo/client/link/schema");
    const { schema } = require("../graphqlSetUp/schemas");
    return new SchemaLink({ schema });
  } else {
    const { HttpLink } = require("@apollo/client/link/http");
    const enchancedFetch = (url, init) => {
      return fetch(url, {
        ...init,
        headers: {
          ...init.headers,
          Cookie: cookie,
        },
      }).then((response) => response);
    };
    return new HttpLink({
      uri: "/api/handleUser",
      credentials: "include",
      fetch: enchancedFetch,
    });
  }
}

function createApolloClient(cookie): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphicLink(cookie),
    cache: new InMemoryCache({ addTypename: false }),
    credentials: "include",
  });
}

export function initializeApollo(
  initialState = null,
  cookie = ""
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient(cookie);

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;
  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export function useApollo(initialState): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

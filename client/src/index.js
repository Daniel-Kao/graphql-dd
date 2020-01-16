import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: createHttpLink({ uri: "./graphql" }),
  cache: new InMemoryCache()
});

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

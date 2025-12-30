
import { createRoot } from 'react-dom/client'
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import './index.css'
import App from './App.jsx'
import { ApolloProvider } from "@apollo/client/react";


const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

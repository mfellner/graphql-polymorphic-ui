import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { createClient } from './apollo';
import App from './app';

async function main() {
  const client = await createClient();

  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('main'),
  );
}

main().catch(err => console.error(err));

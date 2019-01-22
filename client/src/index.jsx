import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Posts from './components/Posts/Posts';
import MainLayout from './common/MainLayout/MainLayout';
import URI from './api/config';

import './main.scss';

const client = new ApolloClient({
  uri: URI,
});


const App = () => (
  <MainLayout>
    <ApolloProvider client={client}>
      <Posts />
    </ApolloProvider>
  </MainLayout>
);

ReactDOM.render(<App />, document.getElementById('root'));

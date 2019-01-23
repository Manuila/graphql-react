import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import Posts from './components/Posts/Posts';
import MainLayout from './common/MainLayout/MainLayout';
import { apolloClient } from './apollo'

import './main.scss';


const App = () => (
  <MainLayout>
    <ApolloProvider client={apolloClient}>
      <Posts />
    </ApolloProvider>
  </MainLayout>
);

ReactDOM.render(<App />, document.getElementById('root'));

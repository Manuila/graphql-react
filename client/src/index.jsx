import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts/Posts';
import store from './store/store';
import MainLayout from './common/MainLayout/MainLayout';

import './main.scss';


const App = () => (
  <MainLayout>
    <Provider store={store}>
      <Posts />
    </Provider>
  </MainLayout>
);

ReactDOM.render(<App />, document.getElementById('root'));

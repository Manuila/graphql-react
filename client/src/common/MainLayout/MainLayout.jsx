import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './main-layout.scss';


const MainLayout = ({ children }) => (
  <Fragment>
    <Header className="page__header">
      <h1 className="page__title">React app</h1>
    </Header>
    <main className="page__body">
      { children }
    </main>
    <Footer className="page__footer">
      {`@${new Date().getFullYear()}`}
    </Footer>
  </Fragment>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;

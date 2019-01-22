import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './layout.scss';


const MainLayout = ({ children }) => (
  <Fragment>
    <Header className="page__header">
      <Title label="React app" />
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

import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

const AppContainer = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppContainer;

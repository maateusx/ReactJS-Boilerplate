import React from 'react';
import PropTypes from 'prop-types';
import { createStore, StoreProvider } from 'easy-peasy';

import Models from './models';

let storeEnhancers = [];

const store = createStore(Models, {
  enhancers: [...storeEnhancers],
});

const Store = ({ children }) => (
  <StoreProvider store={store}>{children}</StoreProvider>
);

Store.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Store;

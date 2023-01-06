import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import reducer from './modules';
import logger from 'redux-logger';

const makeStore = (context) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_NEV !== 'production',
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_NEV !== 'production',
});

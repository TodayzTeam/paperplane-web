import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import { reducer, persistedReducer } from './modules';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';

const makeConfiguredStore = (reducer) =>
  createStore(reducer, undefined, applyMiddleware(logger));

const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfiguredStore(reducer);
  } else {
    // we need it only on client side
    const store = makeConfiguredStore(persistedReducer);
    let persistor = persistStore(store);
    return { persistor, ...store };
  }
};

// wrapper 로 감싸기
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});

// const makeStore = (context) =>
//   configureStore({
//     reducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//     devTools: process.env.NODE_NEV !== 'production',
//   });

// export const wrapper = createWrapper(makeStore, {
//   debug: process.env.NODE_NEV !== 'production',
// });

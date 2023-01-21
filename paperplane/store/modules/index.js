import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import login from './login';

const persistConfig = {
  key: 'login',
  storage,
};

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    login,
  })(state, action);
};

export const persistedReducer = persistReducer(persistConfig, login);

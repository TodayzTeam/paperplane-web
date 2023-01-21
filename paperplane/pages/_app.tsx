import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { wrapper } from './../store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedReducer } from '../store/modules';
import { createStore } from 'redux';
import { setToken } from '../util/api';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  return (
    <PersistGate persistor={persistor} loading={<div>loading...</div>}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);

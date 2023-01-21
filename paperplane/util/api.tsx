import axios, { AxiosInstance } from 'axios';

const setInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.code === 'ECONNABORTED' || error.response?.status === 408) {
        alert('요청이 만료되었습니다.');
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
};

export const publicApi = setInterceptor(
  axios.create({
    baseURL: '/api',
    ...options,
  })
);

export const Api = setInterceptor(
  axios.create({
    baseURL: '/api',
  })
);

export const setToken = async (token: string | null) => {
  publicApi.defaults.headers['accessToken'] = `${token}`;
  Api.defaults.headers['accessToken'] = `${token}`;
};

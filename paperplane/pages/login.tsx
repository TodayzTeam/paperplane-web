import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import KaKao from '../components/login/KaKao';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../store/modules/login';
const URL = 'https://a835-222-120-89-55.jp.ngrok.io';

export default function login() {
  const dispatch = useDispatch();
  const value = useSelector(({ login }) => login.value);

  const login = useCallback(() => {
    dispatch(loginActions.login());
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(loginActions.logout());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <button onClick={() => login()}>로그인</button>
        <button onClick={() => logout()}>로그아웃</button>
        <div>{/* <KaKao href={`${URL}/oauth2/authorization/kakao`} /> */}</div>
      </div>
      <style jsx>{`
        .container {
        }
      `}</style>
    </>
  );
}

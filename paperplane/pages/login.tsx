import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import KaKao from '../components/login/KaKao';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../store/modules/login';
import LoginButton from '../components/login/LoginButton';

const URL = 'http://43.200.226.22:8080/';

export default function login() {
  const dispatch = useDispatch();
  const value = useSelector(({ login }) => login.value);
  const router = useRouter();

  const login = useCallback(() => {
    dispatch(loginActions.login());
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(loginActions.logout());
  }, [dispatch]);

  return (
    <>
      <div className="login__container">
        <div className="login-box">
          <div className="login-box__title">종이비행기</div>
          <div className="login-box__sub">간편 로그인으로 편하게 날아가기</div>
          <div className="login-box__buttons">
            <LoginButton
              url="/image/naver.png"
              text="네이버로 시작하기"
              backgroundColor="#06C93A"
              textColor="#fff"
              onClick={() => {
                login();
                router.push('/');
              }}
            />
            <LoginButton
              url="/image/kakao.jpg"
              text="카카오로 시작하기"
              backgroundColor="#FAE100"
              textColor="#3D5470"
              onClick={() => {}}
            />
          </div>
        </div>
        {/* <button onClick={() => login()}>로그인</button>
        <button onClick={() => logout()}>로그아웃</button>
        <div>
          <KaKao href={`${URL}/oauth2/authorization/kakao`} />
        </div> */}
      </div>
      <style jsx>{`
        .login__container {
          background-image: url('/image/background-group.png');
          background-size: 100% 250%;
          background-position: center center;
          height: calc(100vh - 60px);
          display: flex;
          align-items: center;

          .login-box {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin: 0 auto;
            margin-top: -60px;
            width: 550px;
            text-align: center;
            &__title {
              font-size: 70px;
              font-weight: 700;
              color: #3d5470;
            }
            &__sub {
              font-size: 30px;
              font-weight: 700;
              color: #6b85a4;
            }
            &__buttons {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }
        }
      `}</style>
    </>
  );
}

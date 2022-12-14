import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useCallback } from 'react';
import icon from './icon.png';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../../store/modules/login';

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(({ login }) => login.value);
  const logout = useCallback(() => {
    dispatch(loginActions.logout());
  }, [dispatch]);

  const router = useRouter();
  const path = router.pathname;
  const className = (link: string) => {
    return path == link && 'active';
  };

  return (
    <header>
      <div className="container">
        <div>
          <Link href="/">
            <div className="logo">종이비행기</div>
          </Link>
          {isLogin ? <div></div> : ''}
        </div>
        <div>
          {isLogin ? (
            <div className="account-box">
              <Image src={icon} alt="icon" />
              <Link href="/">
                <div
                  className="logout"
                  onClick={() => {
                    logout();
                  }}
                >
                  로그아웃
                </div>
              </Link>
              <Link href="/profile">
                <div className="profile">내정보</div>
              </Link>
            </div>
          ) : (
            <div className="account-box">
              <Link href="/login">
                <div className="login">로그인</div>
              </Link>
              <Link href="/signup">
                <div className="signup">회원가입</div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        header {
          z-index: 100;
        }
        .container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 60px;
          padding: 0 5%;
        }
        .logo {
          font-size: 28px;
          font-weight: 700;
          color: var(--color-primary-dark);
        }
        .account-box {
          display: flex;
          flex-direction: row;
          font-size: 14px;
          font-weight: 400;
          gap: 40px;
        }
      `}</style>
    </header>
  );
};

export default Header;

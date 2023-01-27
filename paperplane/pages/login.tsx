import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import LoginButton from "../components/login/LoginButton";
import Link from "next/link";
import * as loginActions from "../store/modules/login";
import { setToken } from "../util/api";

export default function login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const getAccessToken = () => {
    const accessToken = router.query.token?.toString();

    if (accessToken) {
      localStorage.setItem("token", accessToken);
      setToken(accessToken);
      Login();
      router.push("/");
    }
  };

  const Login = useCallback(() => {
    dispatch(loginActions.login());
  }, [dispatch]);

  useEffect(() => {
    getAccessToken();
  }, [router.query]);

  return (
    <>
      <div className="login__container">
        <div className="login-box">
          <div className="login-box__title">종이비행기</div>
          <div className="login-box__sub">간편 로그인으로 편하게 날아가기</div>
          <div className="login-box__buttons">
            <Link href="http://43.200.226.22:8080/oauth2/authorization/naver">
              <LoginButton
                url="/image/naver.png"
                text="네이버로 시작하기"
                backgroundColor="#06C93A"
                textColor="#fff"
              />
            </Link>
            <Link href="http://43.200.226.22:8080/oauth2/authorization/kakao">
              <LoginButton
                url="/image/kakao.jpg"
                text="카카오로 시작하기"
                backgroundColor="#FAE100"
                textColor="#3D5470"
              />
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .login__container {
          background-image: url("/image/background-group.png");
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

import { useSelector } from 'react-redux';
import AfterLogin from '../components/home/AfterLogin';
import BeforeLogin from '../components/home/BeforeLogin';

export default function Home() {
  const isLogin = useSelector(({ login }) => login.value);

  return (
    <>
      <div className="home-container">
        <div>{isLogin ? <AfterLogin /> : <BeforeLogin />}</div>
      </div>
      <style jsx>{`
        .home-container {
          position: relative;
          top: -60px;
          width: 100%;
          background: url('/image/home_background.png') no-repeat;
          background-size: 100% 120%;
        }
      `}</style>
    </>
  );
}

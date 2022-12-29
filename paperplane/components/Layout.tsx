import Footer from './navigation/Footer';
import Header from './navigation/Header';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Layout = (props: any) => {
  const [showFooter, setShowFooter] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/login' || router.pathname === '/signup') {
      setShowFooter(false);
    }
  }, [router]);

  return (
    <>
      <div className="container">
        <Header />
        <div className="content">{props.children}</div>
        {showFooter ? <Footer /> : ''}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
        .content {
          flex: 1;
          width: 100%;
          height: auto;
          min-height: 100%;
        }
      `}</style>
    </>
  );
};

export default Layout;

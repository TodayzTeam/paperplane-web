import Footer from "./navigation/Footer";
import Header from "./navigation/Header";

const Layout = (props: any) => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="content">{props.children}</div>
        <Footer />
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

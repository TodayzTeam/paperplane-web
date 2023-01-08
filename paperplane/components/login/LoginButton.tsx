import Image from 'next/image';
interface buttonProps {
  text: string;
  url: string;
  backgroundColor: string;
  textColor: string;
}
const LoginButton = (props: buttonProps) => {
  const { text, url, backgroundColor, textColor } = props;
  return (
    <>
      <div className="button">
        <Image
          className="logo"
          src={url}
          alt="로그인버튼"
          width={40}
          height={40}
          style={{ position: 'absolute', left: 20 }}
        />
        {text}
      </div>
      <style jsx>{`
        .button {
          background-color: ${backgroundColor};
          color: ${textColor};
          width: 500px;
          height: 70px;
          border-radius: 15px;
          font-size: 30px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 20px;
          cursor: pointer;
          .logo {
            position: absolute;
            top: 0;
          }
        }
      `}</style>
    </>
  );
};

export default LoginButton;

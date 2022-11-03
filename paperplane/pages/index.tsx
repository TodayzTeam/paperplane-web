import { useState } from "react"

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="container">
        <div>
          홈 페이지
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          width:100%;
          height:100vh;
          background:linear-gradient(white, #EEE3D9);
        }
        
        `}</style>
    </>
  )
}

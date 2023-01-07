import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Kakao = async () => {
  try {
    const res = await axios.get('/oauth2/authorization/kakao', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    console.log(res.headers);
  } catch (error) {}
};

function KakaoLoginRedirect(props: any) {
  const router = useRouter();
  const params = router.query.params;

  useEffect(() => {
    router.push('http://43.200.226.22:8080/oauth2/authorization/kakao'); // 단순히 url 이동
    // Kakao(); get 요청 보내기 (얘로하면 cors에러나는데 안나게 하면 header에 안받아와짐, 토큰 만료되면 get요청도 안됨)
  }, []);

  // useEffect(() => {
  //   const code = params.code || '';

  //   localStorage.setItem('token', code || '');
  //   window.location.replace('/');
  // }, []);

  return <></>;
}

export default KakaoLoginRedirect;

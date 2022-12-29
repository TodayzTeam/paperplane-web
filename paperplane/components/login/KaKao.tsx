import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function KakaoLoginRedirect(props: any) {
  const url = props.href;
  const router = useRouter();
  const params = router.query.params;

  console.log(params);

  useEffect(() => {
    router.replace(url);
  }, []);

  // useEffect(() => {
  //   const code = params.code || '';

  //   localStorage.setItem('token', code || '');
  //   window.location.replace('/');
  // }, []);

  return <></>;
}

export default KakaoLoginRedirect;

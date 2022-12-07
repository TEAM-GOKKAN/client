import React, { useEffect } from 'react';
import KakaoButton from '../component/SignUp/KakaoButton';
import queryString from 'query-string';

const SignInPage = () => {
  useEffect(() => {
    const queryParam = queryString.parse(window.location.search);
    if (queryParam?.code) {
      console.log('코드 있다요');
    }
  }, []);
  return (
    <div>
      <KakaoButton />
    </div>
  );
};

export default SignInPage;

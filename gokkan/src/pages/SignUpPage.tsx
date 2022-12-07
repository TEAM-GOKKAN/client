import React from 'react';
import useCheckSignUp from '../component/SignUp/useCheckSignUp';

const SignUpPage = () => {
  const checkSignIn = useCheckSignUp();
  return <div>회원가입 페이지입니다.</div>;
};

export default SignUpPage;

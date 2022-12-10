import React, { useEffect, useState } from 'react';
import useCheckSignUp from '../component/SignUp/useCheckSignUp';
import UserName from '../component/SignUp/UserName';
import UserNickName from '../component/SignUp/UserNickName';
import UserAddress from '../component/SignUp/UserAddress';
import UserProfileImage from '../component/SignUp/UserProfileImageContainer';
import UserPhone from '../component/SignUp/UserPhone';
import SingUpConfirmButton from '../component/SignUp/SingUpConfirmButton';
import styled from 'styled-components';
import queryString from 'query-string';

const SignUpWrapper = styled.div`
  width: 94vw;
  height: 94vh;
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  padding-left: 2vw;
  position: relative;
`;

const SignUpPage = () => {
  // const checkSignIn = useCheckSignUp();

  useEffect(() => {
    const queryParam = queryString.parse(window.location.search);
  }, []);

  return (
    <SignUpWrapper>
      <UserProfileImage />
      <UserName />
      <UserNickName />
      <UserPhone />
      <UserAddress />
      <SingUpConfirmButton />
    </SignUpWrapper>
  );
};

export default SignUpPage;

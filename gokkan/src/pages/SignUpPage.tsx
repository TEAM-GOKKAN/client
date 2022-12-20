import React, { useEffect, useState } from 'react';
import useGetAccessToken from '../component/SignUp/useGetAccessToken';
import UserName from '../component/SignUp/UserName';
import UserNickName from '../component/SignUp/UserNickName';
import UserAddress from '../component/SignUp/UserAddress';
import UserProfileImageContainer from '../component/SignUp/UserProfileImageContainer';
import UserPhone from '../component/SignUp/UserPhone';
import SingUpConfirmButton from '../component/SignUp/SingUpConfirmButton';
import useGetUserInfo from '../component/SignUp/useGetUserInfo';
import styled from 'styled-components';
import queryString from 'query-string';

const SignUpWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SignUpPage = () => {
  useGetAccessToken();
  useGetUserInfo();
  return (
    <SignUpWrapper>
      <UserName />
      <UserNickName />
      <UserPhone />
      <UserAddress />
      <UserProfileImageContainer />
      <SingUpConfirmButton />
    </SignUpWrapper>
  );
};

export default SignUpPage;

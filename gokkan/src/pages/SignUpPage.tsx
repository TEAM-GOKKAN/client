import React from 'react';
import useCheckSignUp from '../component/SignUp/useCheckSignUp';
import UserName from '../component/SignUp/UserName';
import UserAddress from '../component/SignUp/UserAddress';
import UserProfileImage from '../component/SignUp/UserProfileImage';
import UserPhone from '../component/SignUp/UserPhone';
import SingUpConfirmButton from '../component/SignUp/SingUpConfirmButton';
import styled from 'styled-components';

const SignUpWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  padding-top: 5vh;
  padding-left: 5vw;
`;
const DetailInfoWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: red;
`;

const SignUpPage = () => {
  // const checkSignIn = useCheckSignUp();
  return (
    <SignUpWrapper>
      <UserProfileImage />
      <UserName />
      <UserPhone />
      <UserAddress />
      <SingUpConfirmButton />
    </SignUpWrapper>
  );
};

export default SignUpPage;

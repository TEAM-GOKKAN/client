import React from 'react';
import useCheckSignUp from '../component/SignUp/useCheckSignUp';
import UserName from '../component/SignUp/UserName';
import UserNickName from '../component/SignUp/UserNickName';
import UserAddress from '../component/SignUp/UserAddress';
import UserProfileImage from '../component/SignUp/UserProfileImage';
import UserPhone from '../component/SignUp/UserPhone';
import SingUpConfirmButton from '../component/SignUp/SingUpConfirmButton';
import styled from 'styled-components';

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

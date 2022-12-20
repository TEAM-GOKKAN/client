import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import {
  clearAtom,
  userProfileImageFileAtom,
  userInfoAtom,
  userNickNameCheckAtom,
  userPhoneCheckAtom,
} from '../../store/signUpAtom';
import { getCustomAxios } from '../../utils/customAxios';

const ConfirmButtonWrapper = styled.button`
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin: 0 -12px;
  height: 50px;
  background-color: var(--color-brown100);
  z-index: 10;
  &[data-submit='true'] {
    background-color: var(--color-brown500);
    color: var(--color-brown100);
  }
`;

const SingUpConfirmButton = () => {
  const [submitPossible, setSubmitPossible] = useState('');
  const [, setClear] = useAtom(clearAtom);
  const [profileImageFile] = useAtom(userProfileImageFileAtom);
  const [userInfo] = useAtom(userInfoAtom);
  const [nickNameCheck] = useAtom(userNickNameCheckAtom);
  const [phoneCheck] = useAtom(userPhoneCheckAtom);
  const customAxios = getCustomAxios();

  useEffect(() => {
    if (
      nickNameCheck === 'true' &&
      phoneCheck === 'true' &&
      userInfo?.adress !== '' &&
      userInfo?.name !== ''
    ) {
      setSubmitPossible('true');
    } else {
      setSubmitPossible('false');
    }
  }, [nickNameCheck, phoneCheck, userInfo?.adress, userInfo?.name]);

  useEffect(() => {
    console.log(submitPossible);
  }, [submitPossible]);

  const handleUserInfoSubmit = () => {
    if (submitPossible !== 'true') return;
    // Atom에 저장된 값들을 전송해줌
    const transferData = new FormData();
    const requestUpdateDto = new Blob([JSON.stringify(userInfo)], {
      type: 'application/json',
    });
    transferData.append('requestUpdateDto', requestUpdateDto);
    transferData.append('profileImage', profileImageFile);
    customAxios
      .put('api/v1/users', transferData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // Atom에 저장된 값들을 전부 비워줌
    setClear('');
  };

  return (
    <ConfirmButtonWrapper
      onClick={handleUserInfoSubmit}
      data-submit={submitPossible}
    >
      회원가입
    </ConfirmButtonWrapper>
  );
};

export default SingUpConfirmButton;

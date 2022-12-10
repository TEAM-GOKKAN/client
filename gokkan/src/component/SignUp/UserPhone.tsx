import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { userPhoneAtom } from '../../store/signUpAtom';
import { useAtom } from 'jotai';

const PhoneWrapper = styled.div`
  display: flex;
  font-size: 18px;
  margin-top: 3vh;
  input {
    margin-left: 2vw;
    padding-left: 2vw;
    width: 50vw;
    font-size: 18px;
  }
  button {
    margin-left: 5vw;
    width: 15vw;
  }
`;

const UserPhone = () => {
  const [phoneNumber, setPhoneNumber] = useAtom(userPhoneAtom);
  const phoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
  };
  const phoneCertificate = () => {
    const { IMP } = window;
    IMP.init('imp15165453');
    IMP.certification(
      {
        merchant_uid: 'ORD20180131-0000011', // 주문 번호
        m_redirect_url: 'http://127.0.0.1:5173/signup', //redirect
      },
      function (rsp) {
        if (rsp.success) {
          console.log('인증 성공');
        } else {
          console.log(rsp);
          console.log('인증 실패');
        }
      }
    );
  };

  useEffect(() => {
    if (phoneNumber.length === 10) {
      setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (phoneNumber.length === 13) {
      setPhoneNumber(
        phoneNumber
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      );
    }
  }, [phoneNumber]);

  return (
    <PhoneWrapper>
      <div>휴대폰</div>
      <input
        type="text"
        onChange={phoneInput}
        value={phoneNumber}
        placeholder="010-xxxx-xxxx"
      />
      <button onClick={phoneCertificate}>인증</button>
    </PhoneWrapper>
  );
};

export default UserPhone;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { userPhoneAtom } from '../../store/signUpAtom';
import { useAtom } from 'jotai';

const PhoneWrapper = styled.div`
  margin-top: 20px;
  font-size: 30px;
  display: flex;
  input {
    margin-left: 10px;
    padding-left: 10px;
    font-size: 30px;
  }
`;
const UserPhone = () => {
  const [phoneNumber, setPhoneNumber] = useAtom(userPhoneAtom);
  const phoneInput = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
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
      <div>휴대폰 : </div>
      <input
        type="text"
        onChange={phoneInput}
        value={phoneNumber}
        placeholder="010-xxxx-xxxx"
      />
    </PhoneWrapper>
  );
};

export default UserPhone;

import React from 'react';
import { productInfoAtom } from '../../store/registerAtom';
import { useAtom } from 'jotai';

const RegisterSubmit = () => {
  const [productInfo] = useAtom(productInfoAtom);
  const handleRegisterSubmit = () => {
    console.log(productInfo);
  };

  return <button onClick={handleRegisterSubmit}>제출하기</button>;
};

export default RegisterSubmit;

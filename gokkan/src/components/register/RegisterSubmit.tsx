import React from 'react';
import { productGetInfoAtom } from '../../store/registerAtom';
import { useAtom } from 'jotai';

const RegisterSubmit = () => {
  const [productInfo] = useAtom(productGetInfoAtom);
  const handleRegisterSubmit = () => {
    console.log(productInfo);
  };

  return <button onClick={handleRegisterSubmit}>제출하기</button>;
};

export default RegisterSubmit;

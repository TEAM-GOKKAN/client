import React from 'react';
import { registerAtom } from '../../store/registerAtom';
import { useAtom } from 'jotai';

const RegisterSubmit = () => {
  const [registerInfo] = useAtom(registerAtom);
  const handleRegisterSubmit = () => {
    console.log(registerInfo);
  };

  return <button onClick={handleRegisterSubmit}>제출하기</button>;
};

export default RegisterSubmit;

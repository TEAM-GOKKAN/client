import React from 'react';
import { useNavigate } from 'react-router-dom';

const SettingMyInfo = () => {
  const navigate = useNavigate();

  const handleMyInfoClick = () => {
    navigate('/signup');
  };
  return <div onClick={handleMyInfoClick}>회원 정보</div>;
};

export default SettingMyInfo;

import React, { ReactNode } from 'react';
import SpreadList from '../common/SpreadList';
import { getCustomAxios } from '../../utils/customAxios';
import { accessTokenAtom, refreshTokenAtom } from '../../store/tokenAtom';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const customAxios = getCustomAxios();
  const [, setAcessToken] = useAtom(accessTokenAtom);
  const [, setRefreshToken] = useAtom(refreshTokenAtom);
  const navigate = useNavigate();

  const logOutClick = () => {
    const url = 'api/v1/users/logout';
    customAxios
      .post(url)
      .then(({ data }) => {
        setAcessToken('');
        setRefreshToken('');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <SpreadList title="로그아웃" clickFn={logOutClick} />;
};

export default LogOut;

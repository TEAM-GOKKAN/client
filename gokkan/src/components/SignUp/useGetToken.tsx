import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useAtom } from 'jotai';
import { accessTokenAtom, refreshTokenAtom } from '../../store/tokenAtom';

const useGetAccessToken = () => {
  const [, setAccessToken] = useAtom(accessTokenAtom);
  const [, setRefreshToken] = useAtom(refreshTokenAtom);
  useEffect(() => {
    const queryParam = queryString.parse(window.location.search);
    const token = queryParam?.token;
    const refreshToken = queryParam?.refreshToken;
    if (token) {
      setAccessToken(String(token));
    }
    if (refreshToken) {
      setRefreshToken(String(refreshToken));
    }
  }, []);
};

export default useGetAccessToken;

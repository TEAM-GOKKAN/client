import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useAtom } from 'jotai';
import { accessTokenAtom } from '../../store/tokenAtom';

const useGetAccessToken = () => {
  const [, setAccessToken] = useAtom(accessTokenAtom);
  useEffect(() => {
    const queryParam = queryString.parse(window.location.search);
    const token = queryParam?.token;
    if (token) {
      setAccessToken(String(token));
    }
  }, []);
};

export default useGetAccessToken;

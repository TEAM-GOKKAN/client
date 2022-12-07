import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { postAtom } from '../../store/loginAtom';
import { useAtom } from 'jotai';

const useCheckSignUp = () => {
  const [post, mutate] = useAtom(postAtom);
  useEffect(() => {
    const queryParam = queryString.parse(window.location.search);
    const code = queryParam?.code;
    mutate(code);
  }, []);

  return post;
};

export default useCheckSignUp;

import React, { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';
import { accessTokenAtom, refreshTokenAtom } from '../../store/tokenAtom';
import { useAtom } from 'jotai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInCheckWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInSuspense = () => {
  const { token, refreshToken } = queryString.parse(window.location.search);
  const [, setAccessTokenAtom] = useAtom(accessTokenAtom);
  const [, setRefreshTokenAtom] = useAtom(refreshTokenAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== '' && refreshToken !== '') {
      setAccessTokenAtom(String(token));
      setRefreshTokenAtom(String(refreshToken));
      axios
        .get('http://3.38.59.40:8080/api/v1/users', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
          if (data.phoneNumber) {
            navigate('/');
          } else {
            navigate('/signup');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token, refreshToken]);

  return (
    <SignInCheckWrapper>
      <RotatingLines
        strokeColor="black"
        strokeWidth="3"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
    </SignInCheckWrapper>
  );
};

export default SignInSuspense;

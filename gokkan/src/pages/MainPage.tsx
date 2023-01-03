import { useNavigate } from 'react-router-dom';
import { getCustomAxios } from '../utils/customAxios';
import { accessTokenAtom, refreshTokenAtom } from '../store/tokenAtom';
import { useAtom } from 'jotai';
import styled from 'styled-components';
import axios from 'axios';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  button {
    width: 200px;
    height: 200px;
    border: 1px solid black;
  }
`;

export default function MainPage() {
  const navigate = useNavigate();
  const customAxios = getCustomAxios();
  const [localRefreshToken, setLocalRefreshToken] = useAtom(refreshTokenAtom);
  const [localAccessToken, setLocalAccessToken] = useAtom(accessTokenAtom);
  const handleNavigateClick = () => {
    const url = 'api/v1/users';
    customAxios
      .get(url)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLogOutClick = () => {
    const url = 'api/v1/users/logout';
    customAxios
      .post(url)
      .then(({ data }) => {
        console.log(data);
        setLocalRefreshToken('');
        setLocalAccessToken('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainWrapper>
      Main page 입니다.
      <button onClick={handleNavigateClick}>사용자 정보 확인 테스트</button>
      <button onClick={handleLogOutClick}>사용자 로그아웃 테스트</button>
    </MainWrapper>
  );
}

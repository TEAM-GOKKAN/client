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
  const [localRefreshToken] = useAtom(refreshTokenAtom);
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

  const handleProductCreateClick = () => {
    const url = 'api/v1/items/temp';
    customAxios
      .post(url)
      .then(({ data }) => {
        const productId = data;
        navigate(`register/1/${productId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleProductDeleteClick = () => {
    const url = 'api/v1/items';
    customAxios
      .delete(url, {
        params: { itemId: 9 },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToken = async () => {
    const newAxios = axios.create();
    delete newAxios.defaults.headers.common['Authorization'];
    const rs = await newAxios.get(
      'http://3.38.59.40:8080/api/v1/auth/refresh',
      {
        params: {
          refreshToken: localRefreshToken,
        },
      }
    );
    const accessToken = rs.data;
    setLocalAccessToken(accessToken);
  };

  return (
    <MainWrapper>
      Main page 입니다.
      <button onClick={handleNavigateClick}>사용자 정보 확인 테스트</button>
      <button onClick={handleProductCreateClick}>상품 등록 테스트</button>
      <button onClick={handleProductDeleteClick}>상품 삭제 테스트</button>
      <button onClick={handleToken}>임시 토큰 발급</button>
    </MainWrapper>
  );
}

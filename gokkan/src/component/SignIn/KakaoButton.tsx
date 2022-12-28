import { useRef } from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { accessTokenAtom } from '../../store/tokenAtom';
import { getCustomAxios } from '../../utils/customAxios';
import { useNavigate } from 'react-router-dom';

const KakaoButtonWrapper = styled.section`
  button {
    background-image: url('./src/asset/kakao_login_medium_wide.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 321px;
    height: 47.48px;
    border-radius: 12px;
    cursor: pointer;
  }
  a {
    display: hidden;
  }
`;

export default function KakaoButton({ setSignIn }: SiginInType) {
  const [accessToken] = useAtom(accessTokenAtom);
  const navigate = useNavigate();
  const customAxios = getCustomAxios();
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const url =
    'http://3.38.59.40:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:5173/signup';

  const handleKakaoButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 토큰이 null이 아닐 때(회원 정보를 받아옴)
    // 이렇게해서 휴대번호가 있는지 없는지 확인해야 함
    if (accessToken !== '') {
      customAxios
        .get('api/v1/users')
        .then(({ data }) => {
          const phoneNumber = data?.phoneNumber;
          if (!phoneNumber) {
            setSignIn(false);
            navigate('signup');
          } else {
            setSignIn(false);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      const anchor = anchorRef.current;
      if (!anchor) return;
      anchor.click();
    }
  };

  return (
    <KakaoButtonWrapper>
      <button onClick={handleKakaoButtonClick} />
      <a href={url} ref={anchorRef} />
    </KakaoButtonWrapper>
  );
}

type SiginInType = {
  setSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};

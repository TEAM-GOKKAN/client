import styled from 'styled-components';

const StyledButton = styled.button`
  background-image: url('./kakao_login_medium_narrow.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100px;
  height: 30px;
  border-radius: 12px;
  cursor: pointer;
`;

export default function KakaoButton() {
  return (
    <StyledButton
      onClick={() => {
        console.log('hi');
      }}
    />
  );
}

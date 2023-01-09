import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export default function MainPage() {
  return <MainWrapper>Main page 입니다.</MainWrapper>;
}

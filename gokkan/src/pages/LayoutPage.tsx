import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header/Header';

export default function LayoutPage() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

const Main = styled.main`
  margin-top: 32px;
  padding: 0 16px;
`;

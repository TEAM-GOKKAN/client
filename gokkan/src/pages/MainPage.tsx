import styled from 'styled-components';
import { useEffect } from 'react';
import customAxios from '../utils/customAxios';
import FilterIcon from '../components/Filter/FilterIcon';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MainPage() {
  useEffect(() => {
    customAxios
      .get('api/v1/auction/filter-list')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainWrapper>
      Main page 입니다.
      <FilterIcon />
    </MainWrapper>
  );
}

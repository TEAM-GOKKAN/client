import styled from 'styled-components';
import MainList from '../components/Main/MainList';
import {
  endTimeAuctionItemListAtom,
  newEnrollAuctionItemListAtom,
} from '../store/auctionQueryAtom';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MainPage() {
  return (
    <MainWrapper>
      <MainList title="마감임박 경매" queryAtom={endTimeAuctionItemListAtom} />
      <MainList
        title="신규 등록 경매"
        queryAtom={newEnrollAuctionItemListAtom}
      />
    </MainWrapper>
  );
}

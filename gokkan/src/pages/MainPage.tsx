import styled from 'styled-components';
import MainList from '../components/Main/MainList';
import {
  endTimeAuctionItemListAtom,
  newEnrollAuctionItemListAtom,
} from '../store/auctionQueryAtom';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .banner {
    width: calc(100% + 32px);
    height: 25vh;
    background-color: var(--color-brown200);
    margin-bottom: 48px;
    margin-left: -16px;
    margin-right: -16px;
  }
`;

export default function MainPage() {
  return (
    <MainWrapper>
      <div className="banner" />
      <MainList title="마감임박 경매" queryAtom={endTimeAuctionItemListAtom} />
      <MainList
        title="신규 등록 경매"
        queryAtom={newEnrollAuctionItemListAtom}
      />
    </MainWrapper>
  );
}

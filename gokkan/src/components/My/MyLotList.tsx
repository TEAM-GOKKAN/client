import React, { ReactNode } from 'react';
import SpreadList from '../common/SpreadList';
import MyRegisteredLot from './MyRegisteredLot';
import MyReturnedLot from './MyReturnedLot';
import MyBidLot from './MyBidLot';

const LotList = () => {
  const listItems: ReactNode[] = [];
  listItems.push(<MyBidLot />);
  listItems.push(<div>낙찰된 경매</div>);
  listItems.push(<MyRegisteredLot />);
  listItems.push(<MyReturnedLot />);

  return <SpreadList title="나의 경매 목록" listItems={listItems} />;
};

export default LotList;

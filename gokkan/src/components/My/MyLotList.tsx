import React, { ReactNode } from 'react';
import SpreadList from '../common/SpreadList';

const LotList = () => {
  const listItems: ReactNode[] = [];
  listItems.push(<div>관심있는 경매</div>);
  listItems.push(<div>입찰한 경매</div>);
  listItems.push(<div>낙찰된 경매</div>);
  listItems.push(<div>등록한 경매</div>);

  return <SpreadList title="나의 경매 목록" listItems={listItems} />;
};

export default LotList;

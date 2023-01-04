import React, { ReactNode } from 'react';
import SpreadList from '../common/SpreadList';

const MyLotRegister = () => {
  const listItems: ReactNode[] = [];
  listItems.push(<div>새로운 경매 등록</div>);
  listItems.push(<div>작성 중인 경매 불러오기</div>);

  return <SpreadList title="경매 등록" listItems={listItems} />;
};

export default MyLotRegister;

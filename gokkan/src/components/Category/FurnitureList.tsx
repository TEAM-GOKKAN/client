import React, { ReactNode } from 'react';
import SpreadList from '../common/SpreadList';

const FurnitureList = () => {
  const listItems: ReactNode[] = [];
  listItems.push(<div>전체</div>);
  listItems.push(<div>의자</div>);
  listItems.push(<div>테이블</div>);
  listItems.push(<div>수납가구</div>);

  return <SpreadList title="가구" listItems={listItems} />;
};

export default FurnitureList;

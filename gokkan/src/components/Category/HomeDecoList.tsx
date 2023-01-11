import React, { ReactNode } from 'react';
import SpreadList from '../common/SpreadList';

const HomeDecoList = () => {
  const listItems: ReactNode[] = [];
  listItems.push(<div>전체</div>);
  listItems.push(<div>거울</div>);
  listItems.push(<div>식기</div>);
  listItems.push(<div>러그</div>);
  listItems.push(<div>화병</div>);
  listItems.push(<div>수납박스</div>);

  return <SpreadList title="홈 데코" listItems={listItems} />;
};

export default HomeDecoList;

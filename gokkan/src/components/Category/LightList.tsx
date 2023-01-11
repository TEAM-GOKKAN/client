import React, { ReactNode } from 'react';
import SpreadList from '../common/SpreadList';

const LightList = () => {
  const listItems: ReactNode[] = [];
  listItems.push(<div>전체</div>);
  listItems.push(<div>플로어 램프</div>);
  listItems.push(<div>데스크 램프</div>);
  listItems.push(<div>테이블 램프</div>);
  listItems.push(<div>펜던트 램프</div>);
  listItems.push(<div>월 램프</div>);

  return <SpreadList title="조명" listItems={listItems} />;
};

export default LightList;

import React, { ReactNode } from 'react';
import SpreadList from '../common/SpreadList';

const MySetting = () => {
  const listItems: ReactNode[] = [];
  listItems.push(<div>회원 정보</div>);
  listItems.push(<div>카드 정보</div>);

  return <SpreadList title="설정" listItems={listItems} />;
};

export default MySetting;

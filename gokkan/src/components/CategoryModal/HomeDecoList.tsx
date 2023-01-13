import React, { ReactNode } from 'react';
import SpreadList from '../common/SpreadList';
import CategoryItem from './CategoryItem';

const HomeDecoList = () => {
  const homeDeco = ['홈 데코', '거울', '식기', '러그', '화병', '수납박스'];
  const listItems: ReactNode[] = homeDeco.map((content) => {
    return <CategoryItem content={content} />;
  });

  return <SpreadList title="홈 데코" listItems={listItems} />;
};

export default HomeDecoList;

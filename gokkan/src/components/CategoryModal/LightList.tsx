import React, { ReactNode } from 'react';
import SpreadList from '../common/SpreadList';
import CategoryItem from './CategoryItem';

const LightList = () => {
  const light = [
    '조명',
    '플로어 램프',
    '데스크 램프',
    '테이블 램프',
    '펜던트 램프',
    '월 램프',
  ];
  const listItems: ReactNode[] = light.map((content) => {
    return <CategoryItem content={content} />;
  });

  return <SpreadList title="조명" listItems={listItems} />;
};

export default LightList;

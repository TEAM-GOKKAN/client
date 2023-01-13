import React, { ReactNode } from 'react';
import SpreadList from '../common/SpreadList';
import CategoryItem from './CategoryItem';

const FurnitureList = () => {
  const furniture = ['가구', '의자', '테이블', '수납가구'];
  const listItems: ReactNode[] = furniture.map((content) => {
    return <CategoryItem content={content} />;
  });

  return <SpreadList title="가구" listItems={listItems} />;
};

export default FurnitureList;

import React from 'react';
import ModalFull from '../components/common/ModalFull';
import FurnitureList from '../components/Category/FurnitureList';
import LightList from '../components/Category/LightList';
import HomeDecoList from '../components/Category/HomeDecoList';

const CategoryPage = () => {
  return (
    <ModalFull title="카테고리">
      <FurnitureList />
      <LightList />
      <HomeDecoList />
    </ModalFull>
  );
};

export default CategoryPage;

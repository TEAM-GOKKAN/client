import React from 'react';
import ModalFull from '../components/common/ModalFull';
import SortFilter from '../components/Filter/SortFilter';
import StyleFilter from '../components/Filter/StyleFilter';
import PriceFilter from '../components/Filter/PriceFilter';
import FilterControlButton from '../components/Filter/FilterControlButton';

const FilterPage = () => {
  return (
    <ModalFull title="필터">
      <SortFilter />
      <StyleFilter />
      <PriceFilter />
      <FilterControlButton />
    </ModalFull>
  );
};

export default FilterPage;

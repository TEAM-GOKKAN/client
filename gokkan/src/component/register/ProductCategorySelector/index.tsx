import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import {
  firstDepthCategoryAtom,
  secondDepthCategoryAtom,
} from '../../../store/registerAtom';
import ProductCategoryContainer from './ProductCategoryContainer';

const CategorySelectorWrapper = styled.div`
  width: 95vw;
  cursor: pointer;
`;

const ProductCategorySelector = () => {
  const [firstDepth, setFirstDepth] = useAtom(firstDepthCategoryAtom);
  const [secondDepth, setSecondDepth] = useAtom(secondDepthCategoryAtom);
  const [isOpen, setIsOpen] = useState(false);
  const handleCatogorySelect = () => {
    // 카테고리 초기화
    setFirstDepth('');
    setSecondDepth('');
    // 카테고리 열기
    setIsOpen(true);
    console.log('hi');
  };

  useEffect(() => {
    // 카테고리가 모두 선택되면, 모달을 닫아줌
    if (firstDepth !== '' && secondDepth !== '') {
      setIsOpen(false);
    }
  }, [firstDepth, secondDepth]);

  return (
    <CategorySelectorWrapper onClick={handleCatogorySelect}>
      {!isOpen &&
        firstDepth === '' &&
        '이곳을 클릭하여 카테고리를 선택해주세요'}
      {firstDepth !== '' && (
        <div>
          {firstDepth} {'>'} {secondDepth}
        </div>
      )}
      {isOpen && <ProductCategoryContainer />}
    </CategorySelectorWrapper>
  );
};

export default ProductCategorySelector;

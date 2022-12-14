import React from 'react';
import { useAtom } from 'jotai';
import {
  firstDepthCategoryAtom,
  secondDepthCategoryAtom,
} from '../../../store/registerAtom';
import ProductCategory from './ProductCategory';

const ProductCategoryContainer = () => {
  const [firstDepth, setFirstDepth] = useAtom(firstDepthCategoryAtom);
  const [secondDepth, setSecondDepth] = useAtom(secondDepthCategoryAtom);

  const handleFirstCategoryClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const selectedId = e.currentTarget.id;
    // 선택된 첫번째 카테고리를 저장해줌
    if (selectedId !== '') {
      setFirstDepth(selectedId);
    }
  };
  const handleSecondCategoryClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const selectedId = e.currentTarget.id;
    // 선택된 두 번째 depth의 카테고리를 저장해줌
    if (selectedId !== '') {
      setSecondDepth(selectedId);
    }
  };

  return (
    <ProductCategory
      firstDepth={firstDepth}
      secondDepth={secondDepth}
      handleFirstCategoryClick={handleFirstCategoryClick}
      handleSecondCategoryClick={handleSecondCategoryClick}
    />
  );
};

export default ProductCategoryContainer;

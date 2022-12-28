import React, { useEffect, useState } from 'react';
import ProductCategory from './ProductCategory';
import ProductName from './ProductName';
import ProductBrand from './ProductBrand';
import styled from 'styled-components';
import ProductDesigner from './ProductDesigner';
import ProductStyle from './ProductStyle';
import ProductType from './ProductType';
import PageControlButton from '../../common/PageControlButton';
import {
  firstDepthCategoryAtom,
  secondDepthCategoryAtom,
  productStyleAtom,
  productTypeAtom,
} from '../../../store/registerAtom';
import { useAtom } from 'jotai';

const ProductMainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const PageTwo = () => {
  const [active, setActive] = useState(false);
  const [firstCategory] = useAtom(firstDepthCategoryAtom);
  const [secondCategory] = useAtom(secondDepthCategoryAtom);
  const [productStyle] = useAtom(productStyleAtom);
  const [productType] = useAtom(productTypeAtom);

  useEffect(() => {
    if (
      firstCategory !== '' &&
      secondCategory !== '' &&
      productStyle !== '' &&
      productType !== ''
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [firstCategory, secondCategory, productStyle, productType]);

  return (
    <ProductMainInfoWrapper>
      <ProductCategory />
      <ProductName />
      <ProductBrand />
      <ProductDesigner />
      <ProductStyle />
      <ProductType />
      <PageControlButton active={active} />
    </ProductMainInfoWrapper>
  );
};

export default PageTwo;

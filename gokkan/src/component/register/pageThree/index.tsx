import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PageControlButton from '../../common/PageControlButton';
import ProductMaterial from './ProductMaterial';
import ProductAge from './ProductAge';
import ProductSize from './ProductSize';
import ProductCondition from './ProductCondition';
import ProductDescription from './ProductDescription';
import {
  productMaterialAtom,
  productAgeAtom,
  productWidthAtom,
  productLengthAtom,
  productHeightAtom,
  productConditionAtom,
  productDetailConditionAtom,
} from '../../../store/registerAtom';

const ProductDetailInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const PageThree = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {}, []);

  return (
    <ProductDetailInfoWrapper>
      <ProductMaterial />
      <ProductAge />
      <ProductSize />
      <ProductCondition />
      <ProductDescription />
      <PageControlButton active={active} />
    </ProductDetailInfoWrapper>
  );
};

export default PageThree;

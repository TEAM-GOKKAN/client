import React from 'react';
import styled from 'styled-components';
import CustomProductInput from '../../common/CustomProductInput';
import { productBrandAtom } from '../../../store/registerAtom';

const ProductBrandWrapper = styled.div`
  margin-bottom: 32px;
`;

const ProductBrand = () => {
  return (
    <ProductBrandWrapper>
      <CustomProductInput
        title="브랜드"
        storeAtom={productBrandAtom}
        placeHolder="모르면 비워주세요"
      />
    </ProductBrandWrapper>
  );
};

export default ProductBrand;

import React from 'react';
import styled from 'styled-components';
import CustomProductInput from '../../common/CustomProductInput';
import { productTypeAtom } from '../../../store/registerAtom';

const ProductTypeWrapper = styled.div`
  margin-bottom: 32px;
`;

const ProductType = () => {
  return (
    <ProductTypeWrapper>
      <CustomProductInput
        title="종류"
        storeAtom={productTypeAtom}
        placeHolder="ex) 우산꽂이"
      />
    </ProductTypeWrapper>
  );
};

export default ProductType;

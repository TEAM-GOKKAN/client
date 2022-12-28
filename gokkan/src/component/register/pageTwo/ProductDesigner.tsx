import React from 'react';
import styled from 'styled-components';
import { productDesignerAtom } from '../../../store/registerAtom';
import CustomProductInput from '../../common/CustomProductInput';

const ProductDesignerWrapper = styled.div`
  margin-bottom: 32px;
`;

const ProductDesigner = () => {
  return (
    <ProductDesignerWrapper>
      <CustomProductInput
        title="디자이너"
        storeAtom={productDesignerAtom}
        placeHolder="모르면 비워주세요"
      />
    </ProductDesignerWrapper>
  );
};

export default ProductDesigner;

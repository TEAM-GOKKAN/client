import React from 'react';
import styled from 'styled-components';
import { productDesignerAtom } from '../../../store/registerAtom';
import CustomProductUnknownInput from '../../common/CustomProductUnknownInput';

const ProductDesignerWrapper = styled.div`
  margin-bottom: 32px;
`;

const ProductDesigner = () => {
  return (
    <ProductDesignerWrapper>
      <CustomProductUnknownInput
        title="디자이너"
        storeAtom={productDesignerAtom}
        placeHolder="디자이너를 입력해주세요"
      />
    </ProductDesignerWrapper>
  );
};

export default ProductDesigner;

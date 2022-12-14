import React from 'react';
import { productNameAtom } from '../../store/registerAtom';
import { useAtom } from 'jotai';
import styled from 'styled-components';

const ProductNameWrapper = styled.div`
  width: 95vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1vh;
  input {
    margin-left: calc(2vw + 18px);
    padding-left: 2vw;
    width: 70vw;
    font-size: 18px;
  }
`;

const ProductName = () => {
  const [productName, setProductName] = useAtom(productNameAtom);

  const inputProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  return (
    <ProductNameWrapper>
      <input
        type="text"
        placeholder="제품 이름"
        value={productName}
        onChange={inputProductName}
      />
    </ProductNameWrapper>
  );
};

export default ProductName;

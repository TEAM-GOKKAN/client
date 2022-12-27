import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PrimitiveAtom, useAtom } from 'jotai';

const ProductInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
  height: 40px;
  input {
    width: 100%;
    background-color: #f4f2f1;
    padding: 10px 12px;
    margin-top: 10px;
    border: none;
  }
`;

const CustomProductInput = ({
  title,
  storeAtom,
  placeHolder,
  inputType = 'text',
}: ProductInputProps) => {
  const [storeValue, setStoreValue] = useAtom(storeAtom);

  const handleTargetInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreValue(e.target.value);
  };

  return (
    <ProductInputWrapper>
      <label htmlFor={title}>{title}</label>
      <input
        type={inputType}
        id={title}
        placeholder={placeHolder}
        value={storeValue}
        onChange={handleTargetInputChange}
      />
    </ProductInputWrapper>
  );
};

type ProductInputProps = {
  title: string;
  storeAtom: PrimitiveAtom<string> | PrimitiveAtom<number>;
  placeHolder: string;
  inputType?: string;
};

export default CustomProductInput;

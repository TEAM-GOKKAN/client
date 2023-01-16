import React, { useState, useEffect } from 'react';
import CategorySelector from './CategorySelector';
import styled from 'styled-components';
import { PrimitiveAtom, useAtom } from 'jotai';

const CustomUnknownInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -4%;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    padding: 10px 12px;
    background-color: none;
    border: 1px solid var(--color-brown100);
    font-weight: 400;
    font-size: 15px;
    line-height: 22.5px;
    font-family: 'Noto Sans KR';
  }
`;

const firstCategoryOptions = [
  { value: 'UnKnown', label: 'UnKnown' },
  { value: '직접입력', label: '직접입력' },
];

const CustomProductUnknownInput = ({
  title,
  storeAtom,
  placeHolder,
}: UnknownInputPropsType) => {
  const [category, setCategory] = useState('');
  const [storeValue, setStoreValue] = useAtom(storeAtom);

  const handleFirstCategoryChange = (newValue: unknown) => {
    setCategory(Object(newValue)?.value);
  };

  const handleTargetInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreValue(e.target.value);
  };

  useEffect(() => {
    if (storeValue !== '') {
      setCategory('직접입력');
    }
  }, [storeValue]);

  return (
    <CustomUnknownInputWrapper>
      <div className="title">{title}</div>
      <CategorySelector
        options={firstCategoryOptions}
        onChange={handleFirstCategoryChange}
        targetValue={{ value: category, label: category }}
      />
      {category === '직접입력' && (
        <input
          placeholder={placeHolder}
          value={storeValue}
          onChange={handleTargetInputChange}
        />
      )}
    </CustomUnknownInputWrapper>
  );
};

type UnknownInputPropsType = {
  title: string;
  storeAtom: PrimitiveAtom<string>;
  placeHolder: string;
};

export default CustomProductUnknownInput;

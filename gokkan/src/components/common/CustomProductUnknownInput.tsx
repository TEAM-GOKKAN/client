import React, { useState, useEffect } from 'react';
import CategorySelector from './CategorySelector';
import styled from 'styled-components';
import { PrimitiveAtom, useAtom } from 'jotai';

const CustomUnknownInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    padding: 10px 12px;
    margin-top: 10px;
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

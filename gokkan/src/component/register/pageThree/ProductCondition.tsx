import React from 'react';
import {
  productConditionAtom,
  productDetailConditionAtom,
} from '../../../store/registerAtom';
import { useAtom } from 'jotai';
import styled from 'styled-components';
import CategorySelector from '../../common/CategorySelector';

const ProductConditionWrapper = styled.div`
  margin-bottom: 32px;
  .title {
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    background-color: #f4f2f1;
    padding: 10px 12px;
    border: none;
  }
`;

const ProductCondition = () => {
  const [condition, setCondition] = useAtom(productConditionAtom);
  const [detailCondition, setDetailCondition] = useAtom(
    productDetailConditionAtom
  );

  const handleConditionChange = (newValue: unknown) => {
    setCondition(Object(newValue)?.value);
  };

  const conditionOption = [
    { value: 'New', label: 'New' },
    { value: 'Best', label: 'Best' },
    { value: 'Good', label: 'Good' },
    { value: 'Noraml', label: 'Normal' },
    { value: 'Bad', label: 'Bad' },
  ];

  const handleTargetInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailCondition(e.target.value);
  };

  return (
    <ProductConditionWrapper>
      <div className="title">컨디션</div>
      <CategorySelector
        options={conditionOption}
        onChange={handleConditionChange}
        targetValue={{ value: condition, label: condition }}
      />
      <input
        type="text"
        placeholder="제품의 상태에 대한 한 줄 설명을 적어주세요"
        value={detailCondition}
        onChange={handleTargetInputChange}
      />
    </ProductConditionWrapper>
  );
};

export default ProductCondition;

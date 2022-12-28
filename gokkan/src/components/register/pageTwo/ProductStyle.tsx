import React from 'react';
import { productStyleAtom } from '../../../store/registerAtom';
import CategorySelector from '../../../components/common/CategorySelector';
import { useAtom } from 'jotai';
import styled from 'styled-components';

const ProductStyleWrapper = styled.div`
  margin-bottom: 32px;
  .title {
    margin-bottom: 10px;
  }
`;

const ProductStyle = () => {
  const [style, setStyle] = useAtom(productStyleAtom);

  const handleStyleChange = (newValue: unknown) => {
    setStyle(Object(newValue)?.value);
  };

  const styleOption = [
    { value: 'Art Deco', label: 'Art Deco' },
    { value: 'Mid-Century Modern', label: 'Mid-Century Modern' },
    { value: 'Space Age', label: 'Space Age' },
    { value: 'Memphis', label: 'Memphis' },
    { value: 'Industrial', label: 'Industrial' },
    { value: 'Contemporary', label: 'Contemporary' },
  ];

  return (
    <ProductStyleWrapper>
      <div className="title">스타일</div>
      <CategorySelector
        options={styleOption}
        onChange={handleStyleChange}
        targetValue={{ value: style, label: style }}
      />
    </ProductStyleWrapper>
  );
};

export default ProductStyle;

import React from 'react';
import { productStartPriceAtom } from '../../store/registerAtom';
import { useAtom } from 'jotai';
import styled from 'styled-components';

const StartPriceWrapper = styled.div`
  width: 95vw;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .price-holder {
    display: flex;
    input {
      text-align: right;
      width: 50vw;
    }
  }
`;

const ProductPrice = () => {
  const [startPrice, setStartPrice] = useAtom(productStartPriceAtom);

  const handleStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let targetValue = e.target.value;
    targetValue = targetValue.replace(/[^0-9]/g, '');
    targetValue = Number(targetValue).toLocaleString();
    setStartPrice(targetValue);
  };

  return (
    <StartPriceWrapper>
      시작가격:
      <div className="price-holder">
        <input
          type="text"
          pattern="\d*"
          onChange={handleStartValue}
          value={startPrice}
        />
        원
      </div>
    </StartPriceWrapper>
  );
};

export default ProductPrice;

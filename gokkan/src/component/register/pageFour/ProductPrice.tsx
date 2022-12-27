import React from 'react';
import { productStartPriceAtom } from '../../../store/registerAtom';
import { useAtom } from 'jotai';
import styled from 'styled-components';

const StartPriceWrapper = styled.div`
  .title {
    margin-bottom: 10px;
  }
  .price-holder {
    display: flex;
    align-items: center;
    input {
      text-align: right;
      width: 100%;
      border: none;
    }
    .scale {
      height: 42px;
      display: flex;
      align-items: center;
      background-color: var(--color-brown100);
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
      <div className="title">시작가</div>
      <div className="price-holder">
        <input
          type="text"
          pattern="\d*"
          onChange={handleStartValue}
          value={startPrice}
        />
        <div className="scale">원</div>
      </div>
    </StartPriceWrapper>
  );
};

export default ProductPrice;

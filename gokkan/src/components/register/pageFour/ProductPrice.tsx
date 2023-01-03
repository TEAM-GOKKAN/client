import React, { useState } from 'react';
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
      color: var(--color-brown300);
    }
  }
  .warning {
    color: var(--color-orange);
    margin-top: 10px;
  }
`;

const ProductPrice = () => {
  const [startPrice, setStartPrice] = useAtom(productStartPriceAtom);
  const [checkPrice, setCheckPrice] = useState('');

  const handleStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let targetValue = e.target.value;
    targetValue = targetValue.replace(/[^0-9]/g, '');
    targetValue = Number(targetValue).toLocaleString();
    setStartPrice(targetValue);
  };

  const handleCheckPrice = () => {
    const checkNumber = Number(startPrice.replace(/,/g, ''));
    if (checkNumber >= 10000) {
      setCheckPrice('good');
    } else {
      setCheckPrice('bad');
    }
  };

  return (
    <StartPriceWrapper>
      <div className="title">시작가</div>
      <div className="price-holder">
        <input
          type="text"
          pattern="\d*"
          onChange={handleStartValue}
          onBlur={handleCheckPrice}
          value={startPrice}
        />
        <div className="scale">원</div>
      </div>
      {checkPrice === 'bad' && (
        <div className="warning">유효한 숫자를 입력해주세요</div>
      )}
    </StartPriceWrapper>
  );
};

export default ProductPrice;

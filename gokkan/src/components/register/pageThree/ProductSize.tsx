import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { useAtom, SetStateAction } from 'jotai';
import {
  productWidthAtom,
  productHeightAtom,
  productDepthAtom,
} from '../../../store/registerAtom';

const ProductSizeWrapper = styled.div`
  margin-bottom: 32px;
  .title {
    margin-bottom: 10px;
  }
  .actual-size {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 42px;
    input {
      width: 91px;
      border: none;
      padding: 10px;
      height: 42px;
    }
  }
`;

const ProductSize = () => {
  const [productWidth, setProductWidth] = useAtom(productWidthAtom);
  const [productDepth, setProductDepth] = useAtom(productDepthAtom);
  const [productHeight, setProductHeight] = useAtom(productHeightAtom);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFunc: (update: SetStateAction<string>) => void
  ) => {
    setFunc(e.target.value);
  };

  return (
    <ProductSizeWrapper>
      <div className="title">사이즈</div>
      <div className="actual-size">
        <input
          type="number"
          placeholder="가로"
          onChange={(e) => {
            handleInputChange(e, setProductWidth);
          }}
          value={productWidth}
        />
        <AiOutlineClose />
        <input
          type="number"
          placeholder="세로"
          onChange={(e) => {
            handleInputChange(e, setProductDepth);
          }}
          value={productDepth}
        />
        <AiOutlineClose />
        <input
          type="number"
          placeholder="높이"
          onChange={(e) => {
            handleInputChange(e, setProductHeight);
          }}
          value={productHeight}
        />
        <div>cm</div>
      </div>
    </ProductSizeWrapper>
  );
};

export default ProductSize;

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ListElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc((100vw - 60px) / 2);
  margin-bottom: 48px;
  img,
  .none-image {
    height: 227px;
    width: 100%;
    margin-bottom: 8px;
    border: 0.5px solid var(--color-brown200);
    background-color: var(--color-brown200);
  }
  .title {
    margin-bottom: 16px;
    .untitled {
      color: var(--color-brown300);
    }
  }
  .price {
    display: flex;
    flex-direction: column;
    color: var(--color-brown300);
    .price-content {
      margin-top: 4px;
      display: flex;
      flex-direction: row;
      .unit {
        margin-left: 4px;
      }
    }
  }
`;

const ProductListElement = ({ productInfo }: ProductListElementPropType) => {
  const navigate = useNavigate();

  const handleElementClick = () => {
    navigate(`/register/1/${productInfo.id}`);
  };

  return (
    <ListElementContainer onClick={handleElementClick}>
      {productInfo.thumbnail ? (
        <img src={productInfo.thumbnail} />
      ) : (
        <div className="none-image" />
      )}
      <div className="title">
        {productInfo.name === '' ? (
          <p className="untitled">Untitled</p>
        ) : (
          productInfo.name
        )}
      </div>
      <div className="price">
        <p className="price-title">시작가</p>
        <div className="price-content">
          -<p className="unit">원</p>
        </div>
      </div>
    </ListElementContainer>
  );
};

type ProductListElementPropType = {
  productInfo: {
    id: string;
    name: string;
    thumbnail: string;
    writer: string;
    created: string;
    updated: string;
  };
};

export default ProductListElement;

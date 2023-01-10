import React from 'react';
import styled from 'styled-components';
import Section from './Section';

export default function ProductInfo() {
  return (
    <Section
      title="주문상품"
      preview="product name Seven vintage vases with two plates"
    >
      <Content>
        <ThumbnailContent>
          <img src="" alt="thumbnail" />
        </ThumbnailContent>
        <NameAndPrice>
          <ProductName>Seven vintage vases with two plates</ProductName>
          <ProductPrice>
            <div>낙찰가</div>
            <div>290,000원</div>
          </ProductPrice>
        </NameAndPrice>
      </Content>
    </Section>
  );
}

const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;

  & > div {
    width: calc((100% - 16px) / 2);
  }
`;

const ThumbnailContent = styled.div`
  background-color: var(--color-brown100);
  height: 100px;

  & img {
    object-fit: cover;
  }
`;

const NameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-line;
`;

const ProductName = styled.div`
  letter-spacing: normal;
  line-height: calc(var(--font-small) * 1.4);
`;

const ProductPrice = styled.div`
  & > div:first-child {
    font-size: var(--font-micro);
    color: var(--color-brown300);
  }

  & > div:last-child {
    letter-spacing: normal;
    margin-top: 6px;
  }
`;

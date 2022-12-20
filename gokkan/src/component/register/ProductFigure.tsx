import React from 'react';
import styled from 'styled-components';

const ProductFigrueWrapper = styled.section`
  display: flex;
  .figure {
    width: 30vw;
    display: flex;
    input {
      width: 15vw;
    }
    label {
      width: 15vw;
    }
  }
`;

const ProductFigure = () => {
  return (
    <ProductFigrueWrapper>
      <section className="figure">
        <label htmlFor="width">가로(cm)</label>
        <input type="number" id="width" />
      </section>
      <section className="figure">
        <label htmlFor="length">세로(cm)</label>
        <input type="number" id="length" />
      </section>
      <section className="figure">
        <label htmlFor="height">높이(cm)</label>
        <input type="number" id="height" />
      </section>
    </ProductFigrueWrapper>
  );
};

export default ProductFigure;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  firstDepthCategoryList,
  secondDepthCategoryList,
} from '../../../utils/categories';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  button {
    border: 1px solid black;
    background-color: white;
    &[data-selected='true'] {
      background-color: #964b00;
      color: white;
    }
  }
  .first-category-holder {
    display: flex;
    justify-content: space-between;
    width: 95vw;
    button {
      width: 25vw;
    }
  }
  .second-category-holder {
    width: 95vw;
    button {
      width: 25vw;
    }
  }
`;

const ProductCategory = ({
  firstDepth,
  secondDepth,
  handleFirstCategoryClick,
  handleSecondCategoryClick,
}: ProductCategoryProp) => {
  return (
    <CategoryWrapper>
      <div className="first-category-holder">
        {firstDepthCategoryList.map((firstCategory) => {
          let selected = false;
          if (firstCategory === firstDepth) {
            selected = true;
          }
          return (
            <button
              key={firstCategory}
              onClick={handleFirstCategoryClick}
              id={firstCategory}
              data-selected={selected}
            >
              {firstCategory}
            </button>
          );
        })}
      </div>
      <div className="second-category-holder">
        {firstDepth !== '' && (
          <Swiper slidesPerView={4} spaceBetween={50}>
            {secondDepthCategoryList[firstDepth].map((secondCategory) => {
              let selected = false;
              if (secondCategory === secondDepth) {
                selected = true;
              }
              return (
                <SwiperSlide key={secondCategory}>
                  <button
                    id={secondCategory}
                    onClick={handleSecondCategoryClick}
                    data-selected={selected}
                  >
                    {secondCategory}
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </CategoryWrapper>
  );
};

type ProductCategoryProp = {
  firstDepth: string;
  secondDepth: string;
  handleFirstCategoryClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleSecondCategoryClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

export default ProductCategory;

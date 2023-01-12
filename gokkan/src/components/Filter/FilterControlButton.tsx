import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import {
  resetFilterAtom,
  sortFilterAtom,
  styleFilterAtom,
  minPriceFilterAtom,
  maxPriceFilterAtom,
} from '../../store/filterAtom';

const FilterControlButton = () => {
  const [, resetFilter] = useAtom(resetFilterAtom);
  const [sortFilter] = useAtom(sortFilterAtom);
  const [styleList] = useAtom(styleFilterAtom);
  const [minPrice] = useAtom(minPriceFilterAtom);
  const [maxPrice] = useAtom(maxPriceFilterAtom);
  const [active, setActive] = useState(false);

  const handleResetButtonClick = () => {
    resetFilter();
  };

  const handleCompleteButtonClick = () => {
    if (active) {
      console.log('제출버튼 클릭');
    }
  };

  useEffect(() => {
    if (
      sortFilter !== '' ||
      styleList.length !== 0 ||
      minPrice !== '' ||
      maxPrice !== ''
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [sortFilter, styleList.length, minPrice, maxPrice]);

  return (
    <Container>
      <button className="reset" onClick={handleResetButtonClick}>
        초기화
      </button>
      <button
        className="complete"
        onClick={handleCompleteButtonClick}
        data-active={active}
      >
        검색결과 보기
      </button>
    </Container>
  );
};

export default FilterControlButton;

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  button {
    height: 100%;
    width: 100%;
  }
  .reset {
    background-color: var(--color-brown200);
    color: var(--color-brown300);
  }
  .complete {
    color: var(--color-brown100);
    background-color: var(--color-brown300);
    &[data-active='true'] {
      background-color: var(--color-brown500);
    }
  }
`;

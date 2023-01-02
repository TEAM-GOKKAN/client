import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const PageControlButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 -16px;
  button {
    height: 50px;
    font-size: 16px;
    width: 50%;
  }
  .pre-page {
    background-color: #d9d6d4;
    color: var(--color-brown300);
  }
  .next-page {
    background-color: var(--color-brown300);
    color: var(--color-brown100);
    &[data-active='true'] {
      background-color: var(--color-brown500);
    }
  }
`;

const PageControlButton = ({ active }: PageControlButtonProp) => {
  const [buttonContent, setButtonContent] = useState('다음');
  const navigate = useNavigate();
  let { pageNumber, productId } = useParams();

  useEffect(() => {
    if (pageNumber === '4') {
      setButtonContent('제출');
    }
  }, [pageNumber]);
  const handlePrePageButton = () => {
    const prePageNumber = String(Number(pageNumber) - 1);
    navigate(`/register/${prePageNumber}/${productId}`);
  };

  const handleNextPageButton = () => {
    if (!active) return;
    if (pageNumber !== '4') {
      const nextPageNumber = String(Number(pageNumber) + 1);
      navigate(`/register/${nextPageNumber}/${productId}`);
    } else {
      console.log('hello');
    }
  };

  return (
    <PageControlButtonWrapper>
      <button className="pre-page" onClick={handlePrePageButton}>
        이전
      </button>
      <button
        className="next-page"
        onClick={handleNextPageButton}
        data-active={active}
      >
        {buttonContent}
      </button>
    </PageControlButtonWrapper>
  );
};

type PageControlButtonProp = {
  active: boolean;
};

export default PageControlButton;

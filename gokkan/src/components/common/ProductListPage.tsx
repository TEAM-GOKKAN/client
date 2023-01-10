import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import customAxios from '../../utils/customAxios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import LoadingIndicator from './LoadingIndicator';
import ProductList from './ProductList';

const ProductListPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .title {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductListPage = ({ url, queryKey, title }: ProductListPagePropType) => {
  const [productList, setProductList] = useState<ProductInfoType[]>([]);
  const [productListCount, setProductListCount] = useState(0);
  const [loadingRef, inView] = useInView();

  const getProductList = ({ pageParam = 0 }) => {
    return customAxios.get(`${url}size=6&page=${pageParam}`);
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: getProductList,
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.data.last) {
        return lastPage.data.number + 1;
      }
    },
  });

  useEffect(() => {
    if (!isFetching && status === 'success') {
      const pageListNumber = data.pages.length;
      setProductListCount(data.pages[0].data.totalElements);
      setProductList((pre) => {
        const targetList = data.pages[pageListNumber - 1].data.content;
        return [...pre, ...targetList];
      });
    }
  }, [isFetching, status, hasNextPage]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <ProductListPageWrapper>
      <div className="title">{title}</div>
      <ProductList
        productList={productList}
        productListNumber={productListCount}
      />
      {hasNextPage === true && (
        <LoadingWrapper ref={loadingRef}>
          <LoadingIndicator />
        </LoadingWrapper>
      )}
    </ProductListPageWrapper>
  );
};

type ProductInfoType = {
  id: string;
  name: string;
  thumbnail: string;
  writer: string;
  created: string;
  updated: string;
  startPrice: number;
};

type ProductListPagePropType = {
  url: string;
  queryKey: string;
  title: string;
};

export default ProductListPage;

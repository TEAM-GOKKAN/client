import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCustomAxios } from '../utils/customAxios';
import ProductListElement from '../components/common/ProductListElement';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import LoadingIndicator from '../components/common/LoadingIndicator';

const MyWritingProductPageWrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyWritingProductPage = () => {
  const customAxios = getCustomAxios();
  const [productList, setProductList] = useState<ProductInfoType[]>([]);
  const [loadingRef, inView] = useInView();

  const getProductList = ({ pageParam = 0 }) => {
    return customAxios.get(
      `api/v1/items/my-items?states=TEMPORARY&size=6&page=${pageParam}`
    );
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
    queryKey: ['projects'],
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
      setProductList((pre) => [
        ...pre,
        ...data.pages[pageListNumber - 1].data.content,
      ]);
    }
  }, [isFetching, status, hasNextPage]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <MyWritingProductPageWrapper>
      {productList.map((element) => (
        <ProductListElement productInfo={element} key={element.id} />
      ))}
      {hasNextPage === true && (
        <LoadingWrapper ref={loadingRef}>
          <LoadingIndicator />
        </LoadingWrapper>
      )}
    </MyWritingProductPageWrapper>
  );
};

type ProductInfoType = {
  id: string;
  name: string;
  thumbnail: string;
  writer: string;
  created: string;
  updated: string;
};

export default MyWritingProductPage;

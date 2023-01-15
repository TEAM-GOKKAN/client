import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FilterIcon from '../Filter/FilterIcon';
import {
  auctionItemListAtom,
  categoryAtom,
  filterInfoAtom,
} from '../../store/auctionQueryAtom';
import { useAtom } from 'jotai';
import { insertCommas } from '../../utils/handleCommas';
import CategorySearchListItem from './CategorySearchListItem';
import { useInView } from 'react-intersection-observer';
import LoadingIndicator from '../common/LoadingIndicator';

const CategorySearchMain = () => {
  const { category } = useParams();
  const [loadingRef, inView] = useInView();
  // 총 검색 결과
  const [totalNumber, setTotalNumber] = useState('');
  // 보여줄 경매 리스트
  const [lotList, setLotList] = useState<LotInfoType[]>([]);
  const [storedCategory, setStoredCategory] = useAtom(categoryAtom);
  const [filterInfo] = useAtom(filterInfoAtom);
  // 해당 카테고리로 조회 요청을 보냄
  const [queryResult] = useAtom(auctionItemListAtom);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    status,
    refetch,
  } = queryResult;

  // 조회할 카테고리 설정
  useEffect(() => {
    if (category) {
      setStoredCategory(category);
    }
  }, [category]);

  // 조건이 변할 때마다 refetch를 해줌
  useEffect(() => {
    refetch();
  }, [
    filterInfo.category,
    filterInfo.maxPrice,
    filterInfo.minPrice,
    filterInfo.sort,
    filterInfo.styles.length,
  ]);

  // 조회 결과 데이터가 변할 때마다 변화된 데이터를 넣어줌
  useEffect(() => {
    if (data) {
      const stringTotalNumber = insertCommas(data.pages[0].data.totalElements);
      setTotalNumber(stringTotalNumber);
      setLotList((pre) => {
        let targetList: LotInfoType[] = [];
        data.pages.forEach((page) => {
          targetList = [...targetList, ...page.data.content];
        });
        return targetList;
      });
    }
  }, [data]);

  // loading Indicator가 보였을 때 다음 페이지를 불러와줌
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Container>
      <nav>
        <div className="number-holder">
          총 <p className="number-total">{totalNumber}</p>개
        </div>
        <FilterIcon />
      </nav>
      <ul className="category-search-list">
        {lotList.map((lot) => {
          return <CategorySearchListItem lotInfo={lot} key={lot.id} />;
        })}
      </ul>
      {hasNextPage === true && (
        <LoadingWrapper ref={loadingRef}>
          <LoadingIndicator />
        </LoadingWrapper>
      )}
    </Container>
  );
};

export default CategorySearchMain;

const Container = styled.main`
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .number-holder {
      font-size: 14px;
      font-weight: 500;
      line-height: 14px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .number-total {
        margin: 0 2px;
      }
    }
  }
  .category-search-list {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 15px;
    row-gap: 48px;
  }
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LotInfoType {
  id: string;
  itemId: string;
  name: string;
  thumbnail: string;
  currentPrice: number;
  writer: string;
  auctionState: string;
  auctionEndDateTime: string;
}

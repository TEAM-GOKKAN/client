import { atomsWithInfiniteQuery } from 'jotai-tanstack-query';
import { atom } from 'jotai';
import customAxios from '../utils/customAxios';

const categoryAtom = atom('');
const stylesAtom = atom<string[]>([]);
const minPriceAtom = atom('');
const maxPriceAtom = atom('');
const sortAtom = atom('마감임박순');

// 마감임박 페이지용 쿼리
const [, endTimeAuctionItemListAtom] = atomsWithInfiniteQuery((get) => ({
  queryKey: ['auction', '마감임박순'],
  queryFn: async ({ queryKey: [name, sort], pageParam = 0 }) => {
    let url = `api/v1/auction/filter-list?size=6&page=${pageParam}`;
    // url에 sort 추가해줌
    url += `&sort=${sort}`;
    // 최종적으로 해당 url로 요청을 보냄
    const page = await customAxios.get(url);
    return page;
  },
  // infinite queries can support paginated fetching
  getNextPageParam: (lastPage: any, pages) => {
    if (!lastPage?.data.last) {
      return lastPage.data.number + 1;
    }
  },
}));

// 신규등록 페이지용 쿼리
const [, newEnrollAuctionItemListAtom] = atomsWithInfiniteQuery((get) => ({
  queryKey: ['auction', '신규등록순'],
  queryFn: async ({ queryKey: [name, sort], pageParam = 0 }) => {
    let url = `api/v1/auction/filter-list?size=6&page=${pageParam}`;
    // url에 sort 추가해줌
    url += `&sort=${sort}`;
    // 최종적으로 해당 url로 요청을 보냄
    const page = await customAxios.get(url);
    return page;
  },
  // infinite queries can support paginated fetching
  getNextPageParam: (lastPage: any, pages) => {
    if (!lastPage?.data.last) {
      return lastPage.data.number + 1;
    }
  },
}));

const [, auctionItemListAtom] = atomsWithInfiniteQuery((get) => ({
  queryKey: [
    'auction',
    get(categoryAtom),
    get(stylesAtom),
    get(minPriceAtom),
    get(maxPriceAtom),
    get(sortAtom),
  ],
  queryFn: async ({
    queryKey: [name, category, styles, minPrice, maxPrice, sort],
    pageParam = 0,
  }) => {
    let url = `api/v1/auction/filter-list?size=6&page=${pageParam}`;
    // url에 sort 추가해줌
    url += `&sort=${sort}`;
    // category 있을 때 카테고리 추가해줌
    if (category !== '') {
      url += `&category=${category}`;
    }
    // minPrice있을 때 추가해줌
    if (minPrice !== '') {
      url += `&minPrice=${minPrice}`;
    }
    // maxPrice있을 때 추가해줌
    if (maxPrice !== '') {
      url += `&maxPrice=${maxPrice}`;
    }
    // styles있을 때 styles 추가해줌
    if ((styles as Array<string>).length !== 0) {
      let existStyle = (styles as Array<string>)[0];
      (styles as Array<string>).forEach((style, index) => {
        if (index !== 0) {
          existStyle += `, ${style}`;
        }
      });
      url += `&styles=${existStyle}`;
    }
    // 최종적으로 해당 url로 요청을 보냄
    const page = await customAxios.get(url);
    return page;
  },
  // infinite queries can support paginated fetching
  getNextPageParam: (lastPage: any, pages) => {
    if (!lastPage?.data.last) {
      return lastPage.data.number + 1;
    }
  },
}));

export {
  auctionItemListAtom,
  categoryAtom,
  stylesAtom,
  minPriceAtom,
  maxPriceAtom,
  sortAtom,
  endTimeAuctionItemListAtom,
  newEnrollAuctionItemListAtom,
};
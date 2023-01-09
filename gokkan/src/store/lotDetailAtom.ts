import { atomsWithQuery } from 'jotai-tanstack-query';
import { atom } from 'jotai';
import { Client } from '@stomp/stompjs';
import { getCustomAxios } from '../utils/customAxios';

interface LotDetail {
  id: number;
  itemNumber: string;
  name: string;
  thumbnail: string;
  startPrice: number;
  width: number;
  depth: number;
  height: number;
  material: string;
  conditionGrade: string;
  conditionDescription: string;
  text: string;
  designer: string;
  brand: string;
  productionYear: number;
  writer: null | string;
  category: {
    name: string;
    children: string[] | null[];
  };
  imageItemUrls: ImageUrl[];
  styles: string[];
  created: string;
  updated: string;
}

interface ImageUrl {
  id: number;
  url: string;
}

interface ExpertValuation {
  name: string;
  profileImageUrl: string;
  comment: string;
  minPrice: number;
  maxPrice: number;
  styles: string;
}

interface SellerInfo {
  name: string;
  profileImageUrl: string;
  createdAt: string;
}

const lotIdAtom = atom(7);

const [lotDetailAtom] = atomsWithQuery((get) => ({
  queryKey: ['lotDetail', get(lotIdAtom)],
  queryFn: async ({ queryKey: [, lotId] }): Promise<LotDetail> => {
    const customAxios = getCustomAxios();
    const { data } = await customAxios.get('/api/v1/items/details/auction', {
      params: {
        itemId: lotId,
      },
    });

    return data;
  },
}));

const [expertValuationAtom] = atomsWithQuery((get) => ({
  queryKey: ['expertValuation', get(lotIdAtom)],
  queryFn: async ({ queryKey: [, lotId] }): Promise<ExpertValuation> => {
    const customAxios = getCustomAxios();
    const { data } = await customAxios.get('/api/v1/expert/comment', {
      params: {
        itemId: lotId,
      },
    });

    return data;
  },
}));

const [sellerInfoAtom] = atomsWithQuery((get) => ({
  queryKey: ['sellerInfo', get(lotIdAtom)],
  queryFn: async ({ queryKey: [, lotId] }): Promise<SellerInfo> => {
    const customAxios = getCustomAxios();
    const { data } = await customAxios.get('/api/v1/users/seller', {
      params: {
        itemId: lotId,
      },
    });

    return data;
  },
}));

export { lotIdAtom, lotDetailAtom, expertValuationAtom, sellerInfoAtom };

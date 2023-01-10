import { atomsWithQuery } from 'jotai-tanstack-query';
import { atom } from 'jotai';
import customAxios from '../utils/customAxios';
import { auctionIdAtom } from './bidAtom';
import { lotIdAtom } from './lotDetailAtom';

interface IAddress {
  name: string;
  phoneNumber: string;
  address: string;
  addressDetail: string;
}

interface IProductInfo {
  id: number;
  itemId: number;
  itemName: string;
  thumbnail: string;
  price: number;
}

interface IPaymentAmount {
  hammerPrice: number;
  fee: number;
  paymentAmount: number;
}

const [addressAtom] = atomsWithQuery(() => ({
  queryKey: ['shippingAddress'],
  queryFn: async (): Promise<IAddress> => {
    const { data } = await customAxios.get('/api/v1/auction/order/address');

    return data;
  },
}));

const [productInfoAtom] = atomsWithQuery((get) => ({
  queryKey: ['productInfo', get(auctionIdAtom), get(lotIdAtom)],
  queryFn: async ({
    queryKey: [, auctionId, itemId],
  }): Promise<IProductInfo> => {
    const { data } = await customAxios.get('/api/v1/auction/order/item', {
      params: {
        auctionId,
        itemId,
      },
    });

    return data;
  },
}));

const [paymentAmountAtom] = atomsWithQuery((get) => ({
  queryKey: ['paymentAmount', get(auctionIdAtom)],
  queryFn: async ({ queryKey: [, auctionId] }): Promise<IPaymentAmount> => {
    const { data } = await customAxios.get('/api/v1/auction/order/pay', {
      params: {
        auctionId,
      },
    });

    return data;
  },
}));

export { addressAtom, productInfoAtom, paymentAmountAtom };

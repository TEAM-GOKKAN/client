import { atomsWithQuery } from 'jotai-tanstack-query';
import { atom } from 'jotai';
import { Client } from '@stomp/stompjs';
import customAxios from '../utils/customAxios';

interface AuctionInfo {
  auctionEndDateTime: string;
  currentPrice: number;
}

interface BidInfo {
  memberId: string;
  price: number;
  bidTime: string;
}

const auctionIdAtom = atom(1);

const [auctionInfoAtom] = atomsWithQuery((get) => ({
  queryKey: ['bidInfo', get(auctionIdAtom)],
  queryFn: async ({ queryKey: [, auctionId] }): Promise<AuctionInfo> => {
    const { data } = await customAxios.get('/api/v1/auction', {
      params: {
        auctionId,
      },
    });

    return data;
  },
}));

const [bidHistoryAtom] = atomsWithQuery((get) => ({
  queryKey: ['bidHistory', get(auctionIdAtom)],
  queryFn: async ({ queryKey: [, auctionId] }): Promise<BidInfo[] | null[]> => {
    const { data } = await customAxios.get('/api/v1/auction/history', {
      params: {
        auctionId,
      },
    });

    return data;
  },
}));

const StompClientAtom = atom<React.MutableRefObject<Client | undefined> | null>(
  null
);

// const bidCloseTimeAtom = atom((get) => {
//   const { auctionEndDateTime } = get(auctionInfoAtom);
//   return auctionEndDateTime;
// });

const currBidPriceAtom = atom<number | string>(0);

const currBidHistoryAtom = atom<BidInfo[] | null[]>([]);

const bidCloseTimeAtom = atom('');

const bidErrMsgAtom = atom('');

const addedBidTimeAtom = atom('');

export {
  auctionIdAtom,
  auctionInfoAtom,
  bidHistoryAtom,
  StompClientAtom,
  currBidPriceAtom,
  bidCloseTimeAtom,
  bidErrMsgAtom,
  addedBidTimeAtom,
  currBidHistoryAtom,
};

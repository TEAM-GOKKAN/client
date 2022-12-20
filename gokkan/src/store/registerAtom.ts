import { atom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';

const uploadImageUrlAtom = atom<string[]>([]);
const uploadImageFileAtom = atom<File[] | unknown[]>([]);
const rawImageFileAtom = atom<File[]>([]);
const productNameAtom = atom('');
const firstDepthCategoryAtom = atom('');
const secondDepthCategoryAtom = atom('');
const productStartPriceAtom = atom('');
const productDetailInfoAtom = atom('');
const registerAtom = atom((get) => {
  const imageFile = get(uploadImageFileAtom);
  const productName = get(productNameAtom);
  const firstCategory = get(firstDepthCategoryAtom);
  const secondCategory = get(secondDepthCategoryAtom);
  const price = get(productStartPriceAtom);
  const detail = get(productDetailInfoAtom);
  return {
    imageFile,
    productName,
    firstCategory,
    secondCategory,
    price,
    detail,
  };
});

export {
  uploadImageUrlAtom,
  uploadImageFileAtom,
  rawImageFileAtom,
  productNameAtom,
  firstDepthCategoryAtom,
  secondDepthCategoryAtom,
  productStartPriceAtom,
  productDetailInfoAtom,
  registerAtom,
};

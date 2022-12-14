import { atom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';

const uploadImageUrlAtom = atom<string[]>([]);
const uploadImageFileAtom = atom<File[] | unknown[]>([]);
const rawImageFileAtom = atom<File[]>([]);
const productNameAtom = atom('');
const firstDepthCategoryAtom = atom('');
const secondDepthCategoryAtom = atom('');

export {
  uploadImageUrlAtom,
  uploadImageFileAtom,
  rawImageFileAtom,
  productNameAtom,
  firstDepthCategoryAtom,
  secondDepthCategoryAtom,
};

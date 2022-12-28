import { atom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';

// productId
const productIdAtom = atom('');

// register page one
const uploadImageUrlAtom = atom<string[]>([]);
const uploadImageFileAtom = atom<File[] | unknown[]>([]);
const examineImageUrlAtom = atom<string[]>([]);
const examineImageFileAtom = atom<File[] | unknown[]>([]);

// register page two
const firstDepthCategoryAtom = atom('');
const secondDepthCategoryAtom = atom('');
const productNameAtom = atom('');
const productBrandAtom = atom('');
const productDesignerAtom = atom('');
const productStyleAtom = atom('');
const productTypeAtom = atom('');

// register page three
const productMaterialAtom = atom('');
const productAgeAtom = atom('');
const productWidthAtom = atom('');
const productLengthAtom = atom('');
const productHeightAtom = atom('');
const productConditionAtom = atom('');
const productDetailConditionAtom = atom('');
const productDescriptionAtom = atom('');

// register page four
const productStartPriceAtom = atom('');

// for register submit
const registerAtom = atom((get) => {
  const itemId = Number(get(productIdAtom));
  const name = get(productNameAtom);
  const startPrice = Number(get(productStartPriceAtom));
  const firstCategory = get(firstDepthCategoryAtom);
  const secondCategory = get(secondDepthCategoryAtom);
  const price = get(productStartPriceAtom);
  return {
    itemId,
    name,
    startPrice,
    category: secondCategory,
  };
});

export {
  productIdAtom,
  uploadImageUrlAtom,
  uploadImageFileAtom,
  productNameAtom,
  firstDepthCategoryAtom,
  secondDepthCategoryAtom,
  productStartPriceAtom,
  registerAtom,
  examineImageUrlAtom,
  examineImageFileAtom,
  productBrandAtom,
  productDesignerAtom,
  productStyleAtom,
  productTypeAtom,
  productMaterialAtom,
  productAgeAtom,
  productWidthAtom,
  productLengthAtom,
  productHeightAtom,
  productConditionAtom,
  productDetailConditionAtom,
  productDescriptionAtom,
};

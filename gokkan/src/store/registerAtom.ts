import { atom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';

// productId
const productIdAtom = atom('');

// register page one
const uploadDbImageUrlAtom = atom<ImageUrl[]>([]);
const uploadImageUrlAtom = atom<string[]>([]);
const uploadImageFileAtom = atom<File[]>([]);
const examineDbImageUrlAtom = atom<ImageUrl[]>([]);
const examineImageUrlAtom = atom<string[]>([]);
const examineImageFileAtom = atom<File[]>([]);

// register page two
const firstDepthCategoryAtom = atom('');
const secondDepthCategoryAtom = atom('');
const productNameAtom = atom('');
const productBrandAtom = atom('');
const productDesignerAtom = atom('');

// register page three
const productStyleAtom = atom<string[]>([]);
const productMaterialAtom = atom('');
const productAgeAtom = atom('');
const productWidthAtom = atom('');
const productDepthAtom = atom('');
const productHeightAtom = atom('');
const productConditionAtom = atom('');
const productDetailConditionAtom = atom('');
const productDescriptionAtom = atom('');

// register page four
const productStartPriceAtom = atom('');

// for register submit
const productInfoAtom = atom((get) => {
  const itemId = Number(get(productIdAtom));
  const name = get(productNameAtom);
  const startPrice = Number(get(productStartPriceAtom));
  const category = get(secondDepthCategoryAtom);
  const imageItemUrls = get(uploadDbImageUrlAtom);
  const imageCheckUrls = get(examineDbImageUrlAtom);
  const styles = get(productStyleAtom);
  const width = Number(get(productWidthAtom));
  const depth = Number(get(productDepthAtom));
  const height = Number(get(productHeightAtom));
  const material = get(productMaterialAtom);
  const conditionGrade = get(productConditionAtom);
  const conditionDescription = get(productDetailConditionAtom);
  const text = get(productDescriptionAtom);
  const designer = get(productDesignerAtom);
  const brand = get(productBrandAtom);
  const productionYear = Number(get(productAgeAtom));
  return {
    itemId,
    name,
    startPrice,
    category,
    imageItemUrls,
    imageCheckUrls,
    styles,
    width,
    depth,
    height,
    material,
    conditionGrade,
    conditionDescription,
    text,
    designer,
    brand,
    productionYear,
  };
});

export {
  uploadDbImageUrlAtom,
  examineDbImageUrlAtom,
  productIdAtom,
  uploadImageUrlAtom,
  uploadImageFileAtom,
  productNameAtom,
  firstDepthCategoryAtom,
  secondDepthCategoryAtom,
  productStartPriceAtom,
  examineImageUrlAtom,
  examineImageFileAtom,
  productBrandAtom,
  productDesignerAtom,
  productStyleAtom,
  productMaterialAtom,
  productAgeAtom,
  productWidthAtom,
  productDepthAtom,
  productHeightAtom,
  productConditionAtom,
  productDetailConditionAtom,
  productDescriptionAtom,
  productInfoAtom,
};

type ImageUrl = {
  imageId: Number;
  url: string;
};

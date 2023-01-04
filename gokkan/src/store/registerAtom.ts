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
const productGetInfoAtom = atom((get) => {
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

// for register first setup
const productSetInfoAtom = atom(
  null,
  (get, set, productInfo: ProductInfoType) => {
    const {
      brand,
      category,
      conditionDescription,
      conditionGrade,
      depth,
      designer,
      height,
      imageCheckUrls,
      imageItemUrls,
      material,
      name,
      productionYear,
      startPrice,
      styles,
      text,
      width,
    } = productInfo;

    const stringTypeProductInfo = [
      brand,
      conditionDescription,
      conditionGrade,
      designer,
      material,
      name,
      text,
    ];
    const stringTypeProductInfoAtomList = [
      productBrandAtom,
      productDetailConditionAtom,
      productConditionAtom,
      productDesignerAtom,
      productMaterialAtom,
      productNameAtom,
      productDescriptionAtom,
    ];
    const numberTypeProductInfo = [
      depth,
      height,
      width,
      productionYear,
      startPrice,
    ];
    const numberTypeProductInfoAtomList = [
      productDepthAtom,
      productHeightAtom,
      productWidthAtom,
      productAgeAtom,
      productStartPriceAtom,
    ];

    // string type check and set
    stringTypeProductInfo.forEach((infoItem, index) => {
      if (infoItem !== '') {
        set(stringTypeProductInfoAtomList[index], infoItem);
      }
    });

    // number type check and set
    numberTypeProductInfo.forEach((infoItem, index) => {
      if (infoItem !== 0) {
        set(numberTypeProductInfoAtomList[index], String(infoItem));
      }
    });

    // style check and set
    if (styles.length !== 0) {
      set(productStyleAtom, styles);
    }

    // category check and set
    if (category.name) {
      set(firstDepthCategoryAtom, category.name);
      set(secondDepthCategoryAtom, category.children.name);
    }

    // imageUrl check and set
    if (imageItemUrls.length !== 0) {
      set(uploadDbImageUrlAtom, imageItemUrls);
    }
    if (imageCheckUrls.length !== 0) {
      set(examineDbImageUrlAtom, imageCheckUrls);
    }
  }
);

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
  productGetInfoAtom,
  productSetInfoAtom,
};

type ImageUrl = {
  id: number;
  url: string;
};

type ProductInfoType = {
  brand: string;
  category: any;
  conditionDescription: string;
  conditionGrade: string;
  created: string;
  depth: number;
  designer: string;
  height: number;
  id: number;
  imageCheckUrls: ImageUrl[];
  imageItemUrls: ImageUrl[];
  itemNumber: string;
  material: string;
  name: string;
  productionYear: number;
  startPrice: number;
  state: string;
  styles: string[];
  text: string;
  thumbnail: string;
  updated: string;
  width: number;
  writer: string;
};

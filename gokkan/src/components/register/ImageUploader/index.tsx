import React from 'react';
import ImageSwiperContainer from './ImageSwiperContainer';
import styled from 'styled-components';
import { PrimitiveAtom } from 'jotai';

const ImgInputWrapper = styled.div`
  width: 100%;
  height: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-brown100);
`;

const ImageUploader = ({ fileAtom, urlAtom }: ImageUploaderPropType) => {
  return (
    <ImgInputWrapper>
      <ImageSwiperContainer fileAtom={fileAtom} urlAtom={urlAtom} />
    </ImgInputWrapper>
  );
};

type ImageUploaderPropType = {
  fileAtom: PrimitiveAtom<unknown[] | File[]>;
  urlAtom: PrimitiveAtom<string[]>;
};

export default ImageUploader;

import React from 'react';
import ImageSwiperContainer from './ImageSwiperContainer';
import styled from 'styled-components';

const ImgInputWrapper = styled.div`
  width: 95vw;
  height: 95vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
`;

const ImageUploader = () => {
  return (
    <ImgInputWrapper>
      <ImageSwiperContainer />
    </ImgInputWrapper>
  );
};

export default ImageUploader;

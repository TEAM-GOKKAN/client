import React from 'react';
import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ImageDropZone from './ImageDropzone';

const SwiperWrapper = styled(Swiper)`
  width: 90vw;
  height: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SwiperSliderWrapper = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-swiper-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      width: 80vw;
      height: 80vw;
      object-fit: cover;
    }
    button {
      width: 30vw;
      color: red;
      border: none;
      background-color: rgba(255, 255, 255, 0.5);
      position: absolute;
      bottom: 10vw;
      left: calc(50% - 15vw);
    }
  }
`;

const ImageSwiper = ({ imageUrlList, handleDeleteButton }: ImageSwiperProp) => {
  return (
    <SwiperWrapper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
    >
      {imageUrlList.map((url, index) => {
        return (
          <SwiperSliderWrapper key={url}>
            <div className="img-swiper-wrapper">
              <img src={url} alt="입력된 이미지" />
              <button
                onClick={() => {
                  handleDeleteButton(index);
                }}
              >
                이미지 삭제
              </button>
            </div>
          </SwiperSliderWrapper>
        );
      })}
      <SwiperSliderWrapper>
        <ImageDropZone />
      </SwiperSliderWrapper>
    </SwiperWrapper>
  );
};

type ImageSwiperProp = {
  imageUrlList: string[];
  handleDeleteButton: (targetIndex: number) => void;
};

export default ImageSwiper;

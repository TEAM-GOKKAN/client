import React from 'react';
import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ImageDropZone from './ImageDropzone';
import { BsTrash } from 'react-icons/Bs';
import { PrimitiveAtom } from 'jotai';

const SwiperWrapper = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper-pagination {
    top: 10px;
  }
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
    align-items: center;
    flex-direction: column;
    img {
      width: 100%;
      height: 258px;
      object-fit: fill;
    }
    button {
      width: 100%;
      height: 42px;
      border: none;
      background-color: #d9d6d4;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 18px;
        height: 18px;
      }
    }
    .load-limit {
      position: absolute;
      z-index: 20;
      top: 10px;
      right: 10px;
    }
  }
`;

const ImageSwiper = ({
  imageUrlList,
  handleDeleteButton,
  preTreatment,
}: ImageSwiperProp) => {
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
                <BsTrash />
              </button>
              <div className="load-limit">{imageUrlList.length}/5</div>
            </div>
          </SwiperSliderWrapper>
        );
      })}
      <SwiperSliderWrapper>
        <ImageDropZone preTreatment={preTreatment} />
      </SwiperSliderWrapper>
    </SwiperWrapper>
  );
};

type ImageSwiperProp = {
  imageUrlList: string[];
  handleDeleteButton: (targetIndex: number) => void;
  preTreatment: (rawImageFileList: File[]) => void;
};

export default ImageSwiper;

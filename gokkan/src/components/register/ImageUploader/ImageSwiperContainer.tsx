import React, { useState, useEffect } from 'react';
import { useAtom, PrimitiveAtom } from 'jotai';
import ImageSuspense from './ImageSuspense';
import {
  fileListToBase64,
  fileListToNewFileList,
} from '../../../utils/resizeFile';
import ImageSwiper from './ImageSwiper';
import styled from 'styled-components';

const SwiperWrapper = styled.div`
  width: 100%;
  height: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-brown100);
  position: relative;
  .image-count-holder {
    width: 26px;
    justify-content: space-between;
    position: absolute;
    bottom: -18px;
    right: 0;
    display: flex;
    color: var(--color-brown200);
    .image-count {
      color: var(--color-brown500);
    }
  }
`;

const ImageSwiperContainer = ({ fileAtom, urlAtom }: ImageUploaderPropType) => {
  const [imageUrlList, setImageUrlList] = useAtom(urlAtom);
  const [imageFileList, setImageFileList] = useAtom(fileAtom);
  const [isLoading, setIsLoading] = useState(false);

  const pretreatmentImageFileList = async (rawImageFileList: File[]) => {
    if (rawImageFileList.length === 0) return;
    if (imageUrlList.length >= 5) return;
    // 로딩 중 표시
    setIsLoading(true);
    // 이미지 파일 전처리
    const newFileList = await fileListToNewFileList(rawImageFileList);
    // 이미지 파일을 base64 url로 변환함
    const base64UrlList = await fileListToBase64(newFileList);

    // base64url 및 파일을 할당함
    setImageUrlList([...imageUrlList, ...base64UrlList].slice(0, 5));
    setImageFileList([...imageFileList, ...newFileList].slice(0, 5));

    // 로딩 완료 표시
    setIsLoading(false);
  };

  const handleDeleteButton = (targetIndex: number) => {
    function deleteTarget<T>(value: T, index: number) {
      if (index === targetIndex) {
        return false;
      } else {
        return true;
      }
    }
    // url 삭제
    setImageUrlList((pre) => {
      return pre.filter(deleteTarget);
    });
    // 전처리된 이미지 파일 삭제
    setImageFileList((pre) => {
      return pre.filter(deleteTarget);
    });
  };

  if (isLoading) {
    return <ImageSuspense />;
  }

  return (
    <SwiperWrapper>
      <ImageSwiper
        handleDeleteButton={handleDeleteButton}
        imageUrlList={imageUrlList}
        preTreatment={pretreatmentImageFileList}
      />
      <div className="image-count-holder">
        <p className="image-count">{imageUrlList.length}</p> <p>/</p>5
      </div>
    </SwiperWrapper>
  );
};

type ImageUploaderPropType = {
  fileAtom: PrimitiveAtom<unknown[] | File[]>;
  urlAtom: PrimitiveAtom<string[]>;
};

export default ImageSwiperContainer;

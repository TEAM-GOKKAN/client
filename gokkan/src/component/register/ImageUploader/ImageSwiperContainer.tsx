import React, { useState, useEffect } from 'react';
import { useAtom, PrimitiveAtom } from 'jotai';
import ImageSuspense from './ImageSuspense';
import {
  fileListToBase64,
  fileListToNewFileList,
} from '../../../utils/resizeFile';
import ImageSwiper from './ImageSwiper';

const ImageSwiperContainer = ({ fileAtom, urlAtom }: ImageUploaderPropType) => {
  const [imageUrlList, setImageUrlList] = useAtom(urlAtom);
  const [imageFileList, setImageFileList] = useAtom(fileAtom);
  const [isLoading, setIsLoading] = useState(false);

  const pretreatmentImageFileList = async (rawImageFileList: File[]) => {
    if (rawImageFileList.length === 0) return;
    // 로딩 중 표시
    setIsLoading(true);
    // 이미지 파일 전처리
    const newFileList = await fileListToNewFileList(rawImageFileList);
    // 이미지 파일을 base64 url로 변환함
    const base64UrlList = await fileListToBase64(newFileList);

    // base64url 및 파일을 할당함
    setImageUrlList(base64UrlList);
    setImageFileList(newFileList);

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
    <ImageSwiper
      handleDeleteButton={handleDeleteButton}
      imageUrlList={imageUrlList}
      preTreatment={pretreatmentImageFileList}
    />
  );
};

type ImageUploaderPropType = {
  fileAtom: PrimitiveAtom<unknown[] | File[]>;
  urlAtom: PrimitiveAtom<string[]>;
};

export default ImageSwiperContainer;

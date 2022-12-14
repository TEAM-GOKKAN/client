import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import {
  uploadImageUrlAtom,
  uploadImageFileAtom,
  rawImageFileAtom,
} from '../../../store/registerAtom';
import ImageSuspense from './ImageSuspense';
import {
  fileListToBase64,
  fileListToNewFileList,
} from '../../../utils/resizeFile';
import ImageSwiper from './ImageSwiper';

const ImageSwiperContainer = () => {
  const [imageUrlList, setImageUrlList] = useAtom(uploadImageUrlAtom);
  const [imageFileList, setImageFileList] = useAtom(uploadImageFileAtom);
  const [rawImageFileList, setRawImageFileList] = useAtom(rawImageFileAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [rawImageCount, setRawImageCount] = useState(0);

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
    // 원본 파일 삭제
    setRawImageFileList((pre) => {
      return pre.filter(deleteTarget);
    });
    // url 삭제
    setImageUrlList((pre) => {
      return pre.filter(deleteTarget);
    });
    // 전처리된 이미지 파일 삭제
    setImageFileList((pre) => {
      return pre.filter(deleteTarget);
    });
  };

  useEffect(() => {
    // 이미지가 추가된 경우에만 이미지 추가 로직 작동해주기
    if (rawImageFileList.length > rawImageCount) {
      pretreatmentImageFileList(rawImageFileList);
    }
    setRawImageCount(rawImageFileList.length);
  }, [rawImageFileList.length]);

  if (isLoading) {
    return <ImageSuspense />;
  }

  return (
    <ImageSwiper
      handleDeleteButton={handleDeleteButton}
      imageUrlList={imageUrlList}
    />
  );
};

export default ImageSwiperContainer;

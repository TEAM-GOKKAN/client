import React from 'react';
import {
  productInfoAtom,
  uploadImageFileAtom,
  examineImageFileAtom,
} from '../../store/registerAtom';
import { useAtom } from 'jotai';
import { getCustomAxios } from '../../utils/customAxios';

const ProductTempSaveButton = () => {
  const [productInfo] = useAtom(productInfoAtom);
  const [uploadImgFile] = useAtom(uploadImageFileAtom);
  const [examineImgFile] = useAtom(examineImageFileAtom);
  const customAxios = getCustomAxios();

  const handleTempSaveButtonClick = () => {
    console.log('tmp save button clicked');
    console.log(productInfo);
    const transferData = new FormData();
    const requestData = new Blob([JSON.stringify(productInfo)], {
      type: 'application/json',
    });
    transferData.append('request', requestData);
    uploadImgFile.forEach((uploadImg) => {
      transferData.append('imageItemFiles', uploadImg);
    });
    examineImgFile.forEach((examineImg) => {
      transferData.append('imageCheckFiles', examineImg);
    });

    customAxios
      .put('api/v1/items', transferData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button className="save" onClick={handleTempSaveButtonClick}>
      저장
    </button>
  );
};

export default ProductTempSaveButton;

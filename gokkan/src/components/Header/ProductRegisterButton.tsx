import React from 'react';
import { getCustomAxios } from '../../utils/customAxios';
import { useNavigate } from 'react-router-dom';
import { productIdAtom } from '../../store/registerAtom';
import { useAtom } from 'jotai';

const ProductRegisterButton = () => {
  const customAxios = getCustomAxios();
  const navigate = useNavigate();
  const [productId, setProductId] = useAtom(productIdAtom);

  // 경매 등록 부분
  const handleProductRegister = () => {
    customAxios
      .post('api/v1/items/temp')
      .then(({ data }) => {
        setProductId(String(data));
        navigate(`register/1/${data}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <button onClick={handleProductRegister}>경매 등록</button>;
};

export default ProductRegisterButton;

import React, { useEffect, useState } from 'react';
import { getCustomAxios } from '../../utils/customAxios';

const useProductTempInfo = (itemId: string) => {
  const [productInfo, setProductInfo] = useState({});
  const customAxios = getCustomAxios();

  useEffect(() => {
    const url = 'api/v1/items/details/temp';
    customAxios
      .get(url, {
        params: { itemId: Number(itemId) },
      })
      .then(({ data }) => {
        console.log(data);
        // setProductInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return productInfo;
};

export default useProductTempInfo;

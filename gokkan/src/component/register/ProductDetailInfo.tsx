import React from 'react';
import { productDetailInfoAtom } from '../../store/registerAtom';
import { useAtom } from 'jotai';
import styled from 'styled-components';

const DetailInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductDetailInfo = () => {
  const [detailInfo, setDetailInfo] = useAtom(productDetailInfoAtom);

  const handleDetailInfoChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDetailInfo(e.target.value);
  };

  return (
    <DetailInfoWrapper>
      <label htmlFor="detail-info">제품의 상세 정보</label>
      <textarea
        id="detail-info"
        name="detail-info"
        rows={5}
        cols={33}
        placeholder={'제품에 대한 상세 정보를 입력해주세요'}
        onChange={handleDetailInfoChange}
        value={detailInfo}
      />
    </DetailInfoWrapper>
  );
};

export default ProductDetailInfo;

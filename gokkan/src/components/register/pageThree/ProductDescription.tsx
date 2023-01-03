import React from 'react';
import { productDescriptionAtom } from '../../../store/registerAtom';
import { useAtom } from 'jotai';
import styled from 'styled-components';

const DetailInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 70px;
  label {
    margin-bottom: 10px;
  }
  textarea {
    border: none;
    padding: 10px;
    height: 140px;
  }
  .limit {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`;

const ProductDescription = () => {
  const [description, setDescription] = useAtom(productDescriptionAtom);

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.value.length <= 1000) {
      setDescription(e.target.value);
    }
  };

  return (
    <DetailInfoWrapper>
      <label htmlFor="detail-info">설명</label>
      <textarea
        id="detail-info"
        name="detail-info"
        rows={5}
        cols={33}
        placeholder={'제품에 대한 상세 정보를 입력해주세요'}
        onChange={handleDescriptionChange}
        value={description}
      />
      <div className="limit">{description.length} / 1000</div>
    </DetailInfoWrapper>
  );
};

export default ProductDescription;

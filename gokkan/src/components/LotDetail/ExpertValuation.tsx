import React from 'react';
import styled from 'styled-components';

export default function ExpertValuation() {
  return (
    <Container>
      <Profile>
        <ProfileImageContainer>
          {/* <img src="" alt="" /> */}
        </ProfileImageContainer>
        <ExpertInfo>
          <div>김전문</div>
          <ExpertField>
            <span>Mid-Century Modern</span>
            <span>Art Deco</span>
          </ExpertField>
        </ExpertInfo>
      </Profile>
      <Comment>
        <span>희소성 있는 제품으로 어쩌고 저쩌고 얼른 응찰하세요.</span>
      </Comment>
      <Estimate>
        <span>예상 낙찰가</span>
        <div>
          <EstimatePrice>120,000 - 130,000</EstimatePrice>
          <span>원</span>
        </div>
      </Estimate>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 42px;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    margin-top: 42px;
    display: block;
    border-bottom: 1px solid var(--color-brown100);
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

const ProfileImageContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--color-brown200);

  & > img {
    width: 100%;
    object-fit: cover;
  }
`;

const ExpertInfo = styled.div`
  font-weight: 500;
`;

const ExpertField = styled.div`
  margin-top: 4px;

  & span {
    color: var(--color-brown300);
    font-size: var(--font-micro);
    font-weight: 400;
    letter-spacing: normal;

    &::after {
      content: '';
      display: inline-block;
      position: relative;
      width: 1px;
      height: 11px;
      top: 2px;
      border-right: 1px solid var(--color-brown300);
      margin: 0 6px;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }
`;

const Comment = styled.div`
  padding: 10px 12px;
  background: var(--color-brown100);
  margin-bottom: 12px;

  & > span {
    font-size: var(--font-small);
  }
`;

const Estimate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    font-size: var(--font-micro);
  }
`;

const EstimatePrice = styled.span``;

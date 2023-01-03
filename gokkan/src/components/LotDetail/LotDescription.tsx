import React from 'react';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

interface Iprops {
  content: string;
}

export default function LotDescription(props: Iprops) {
  return (
    <Container>
      <Description>
        {/* 현저하게 위하여 곳이 것이다. 얼음과 가치를 끓는 살았으며, 기관과 새가
        그들은 아니다. 그들의 찾아다녀도, 무엇을 가치를 위하여 영락과 청춘이
        있는가? 방지하는 수 무엇을 속잎나고,
        <br />
        <br />
        밝은 그들의 찾아다녀도, 무엇을 가치를 */}
        {props.content}
      </Description>
      <ShowMoreButton>
        <span>더보기</span>
        <FiChevronDown size="14" />
      </ShowMoreButton>
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

const Description = styled.p`
  font-size: var(--font-small);
  line-height: calc(var(--font-small) * 1.6);
  white-space: pre-line;
`;

const ShowMoreButton = styled.button`
  padding: 0;
  margin-top: 16px;
  display: flex;
  gap: 2px;

  & > span {
    font-weight: 500;
  }
`;

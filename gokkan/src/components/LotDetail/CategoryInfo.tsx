import React from 'react';
import styled from 'styled-components';
import { MdChevronRight } from 'react-icons/md';

interface Iprops {
  category: {
    name: string;
    children: string[] | null[];
  };
}

export default function CategoryInfo({ category }: Iprops) {
  return (
    <Conatiner>
      <span>{category.name}</span>
      <MdChevronRight />
      <span>{category.children?.at(-1)}</span>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;

  & * {
    font-size: var(--font-micro);
    color: var(--color-brown300);
  }
`;

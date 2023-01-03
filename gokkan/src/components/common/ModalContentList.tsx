import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.ul``;

const ModalContentList = ({ children, title }: ModalContentListProp) => {
  return <ListContainer></ListContainer>;
};

type ModalContentListProp = {
  children: React.ReactNode;
  title: string;
};

export default ModalContentList;

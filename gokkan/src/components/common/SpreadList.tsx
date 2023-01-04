import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';

const SpreadListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .title {
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    .iconHolder {
      transition: all ease 0.3s;
      &[data-listopen='true'] {
        transform: rotate(180deg);
      }
    }
  }
`;

const SpreadListItem = styled.li`
  width: 100%;
  height: 30px;
  display: felx;
  align-items: center;
  padding-left: 10px;
  margin-top: 10px;
`;

const SpreadList = ({ title, listItems = [] }: SpreadListPropType) => {
  const [listOpen, setListOpen] = useState(false);

  const handleTitleClick = () => {
    setListOpen((pre) => !pre);
  };

  return (
    <SpreadListContainer>
      <div className="title" onClick={handleTitleClick}>
        {title}
        {listItems.length !== 0 && (
          <div className="iconHolder" data-listopen={listOpen}>
            <AiOutlineDown />
          </div>
        )}
      </div>
      {listOpen && (
        <ul>
          {listItems.map((item, index) => {
            return <SpreadListItem key={index}>{item}</SpreadListItem>;
          })}
        </ul>
      )}
    </SpreadListContainer>
  );
};

type SpreadListPropType = {
  title: string;
  listItems?: ReactNode[];
};

export default SpreadList;

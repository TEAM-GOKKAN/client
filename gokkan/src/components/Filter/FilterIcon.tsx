import React from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const FilterIcon = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilterButtonClick = () => {
    navigate('/filter', { state: { background: location } });
  };
  return (
    <Container onClick={handleFilterButtonClick}>
      <BiFilterAlt />
      <div className="title">필터</div>
    </Container>
  );
};

export default FilterIcon;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 42px;
  background-color: red;
  .title {
    margin-left: 3px;
  }
`;

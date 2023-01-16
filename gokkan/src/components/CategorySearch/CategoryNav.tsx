import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { furniture, light, homeDeco } from '../../utils/category';
import styled from 'styled-components';
import CategoryNavItem from './CategoryNavItem';

const CategoryNav = () => {
  const { category } = useParams();
  const [firstDepthCategory, setFirstDepthCategory] = useState('');
  const [secondDepthCategory, setSecondDepthCategory] = useState<string[]>([]);

  useEffect(() => {
    if (furniture.includes(String(category))) {
      setFirstDepthCategory('가구');
      setSecondDepthCategory(furniture);
    }
    if (light.includes(String(category))) {
      setFirstDepthCategory('조명');
      setSecondDepthCategory(light);
    }
    if (homeDeco.includes(String(category))) {
      setFirstDepthCategory('홈 데코');
      setSecondDepthCategory(homeDeco);
    }
  }, [category]);

  return (
    <Container>
      <div className="title">{firstDepthCategory}</div>
      <ul>
        {secondDepthCategory.map((secondDepthCategory) => {
          return (
            <CategoryNavItem
              secondDepthCategory={secondDepthCategory}
              key={secondDepthCategory}
            />
          );
        })}
      </ul>
    </Container>
  );
};

export default CategoryNav;

const Container = styled.nav`
  margin-bottom: 48px;
  .title {
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 12px;
  }
  ul {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    /* hide scrollbar */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  ul::-webkit-scrollbar {
    display: none;
  }
`;

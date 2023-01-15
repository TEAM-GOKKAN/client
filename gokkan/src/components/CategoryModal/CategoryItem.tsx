import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ content }: CategoryItemPropType) => {
  const navigate = useNavigate();

  // 첫번째 depth의 카테고리에 속하는 것이면 전체로 표시되도록 만들어줌
  const firstDepthCategory = ['가구', '조명', '홈 데코'];
  const displayContent = firstDepthCategory.includes(content)
    ? '전체'
    : content;

  const handleCategoryButtonClick = () => {
    navigate(`/categorySearch/${content}`);
  };

  return <div onClick={handleCategoryButtonClick}>{displayContent}</div>;
};

export default CategoryItem;

interface CategoryItemPropType {
  content: string;
}

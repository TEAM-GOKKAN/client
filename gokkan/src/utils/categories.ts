const firstDepthCategoryList = ['가구', '조명', '홈데코'];
const secondDepthCategoryList: { [name: string]: string[] } = {
  가구: ['의자', '소파', '테이블', '수납가구'],
  조명: ['플로어 램프', '데스크 램프', '테이블 램프', '펜던트 램프', '월 램프'],
  홈데코: ['거울', '식기', '러그', '화병', '수납박스'],
};

export { firstDepthCategoryList, secondDepthCategoryList };

import styled from 'styled-components';
import ProductPrice from './ProductPrice';
import PageControlButton from '../../common/PageControlButton';

const PageFourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const PageFour = () => {
  return (
    <PageFourWrapper>
      <ProductPrice />
      <PageControlButton />
    </PageFourWrapper>
  );
};

export default PageFour;

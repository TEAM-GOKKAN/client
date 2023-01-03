import React from 'react';
import styled from 'styled-components';
import ImageSlider from '../common/ImageSlider';

interface Iprops {
  lotName: string;
  lotNumber: number;
  lotImageUrls: ImageUrl[];
}

interface ImageUrl {
  id: number;
  url: string;
}

export default function InfoMain(props: Iprops) {
  const { lotName, lotNumber, lotImageUrls } = props;

  return (
    <Container>
      {/* <ImageContainer> */}
      <ImageSlider>
        {lotImageUrls.length &&
          lotImageUrls.map((image: ImageUrl) => (
            <img key={image.id} src={image.url} alt="image" />
          ))}
      </ImageSlider>
      {/* </ImageContainer> */}
      <ProductName>{lotName}</ProductName>
      <LotNumber>{'No.' + lotNumber}</LotNumber>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 18px;
`;

const ProductName = styled.h1`
  font-size: var(--font-x-large);
  margin-top: 32px;
  margin-bottom: 4px;
  letter-spacing: normal;
`;

const LotNumber = styled.span`
  color: var(--color-brown300);
  font-size: var(--font-x-micro);
  letter-spacing: normal;
`;
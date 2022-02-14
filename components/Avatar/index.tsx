import React from 'react';
import styled from 'styled-components/native';

const defaultSize = 42;

const Container = styled.View`
  width: ${defaultSize}px;
  height: ${defaultSize}px;
`;

const Image = styled.Image`
  width: ${defaultSize}px;
  height: ${defaultSize}px;
  border-radius: ${defaultSize / 2}px;
`;

const Avatar = ({imageSource}) => {
  return (
    <Container>
      <Image source={imageSource} />
    </Container>
  );
};

export default Avatar;

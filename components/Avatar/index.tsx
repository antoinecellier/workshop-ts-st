import React from 'react';
import styled from 'styled-components/native';
import {ImageSourcePropType} from 'react-native';

const SIZE = 42;

const Container = styled.View`
  width: ${SIZE}px;
  height: ${SIZE}px;
`;

const Image = styled.Image`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${SIZE / 2}px;
`;

type AvatarProps = {
  imageSource: ImageSourcePropType;
};

const Avatar = ({imageSource}: AvatarProps) => {
  return (
    <Container>
      <Image source={imageSource} />
    </Container>
  );
};

export default Avatar;

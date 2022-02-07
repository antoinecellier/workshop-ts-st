import React from 'react';
import {ImageSourcePropType} from 'react-native';
import styled from 'styled-components/native';

type AvatarProps = {
  imageSource: ImageSourcePropType;
  size?: number;
};

const defaultSize = 42;

const Container = styled.View<Required<Pick<AvatarProps, 'size'>>>`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
`;

const Image = styled.Image<Required<Pick<AvatarProps, 'size'>>>`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  border-radius: ${({size}) => size / 2}px;
`;

const Avatar = ({imageSource, size = defaultSize}: AvatarProps) => {
  return (
    <Container size={size}>
      <Image size={size} source={imageSource} />
    </Container>
  );
};

export default Avatar;

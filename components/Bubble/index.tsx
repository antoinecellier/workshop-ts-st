import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

import {colors, ColorVariants} from '../../theme/constants';

type BubbleProps = {
  content: string;
  type: ColorVariants;
  style?: StyleProp<ViewStyle>;
};

const Container = styled.View<Pick<BubbleProps, 'type'>>`
  padding: 12px;
  border-radius: 10px;
  background: ${({type}) =>
    type === 'secondary' ? colors.secondary : colors.primary};
`;

const Text = styled.Text<Pick<BubbleProps, 'type'>>`
  color: ${({type}) => (type === 'secondary' ? '#000' : '#fff')};
`;

const Bubble = ({content, type, style}: BubbleProps) => (
  <Container type={type} style={style}>
    <Text type={type}>{content}</Text>
  </Container>
);

export default Bubble;

import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

import * as styles from '../../styles';

export type BubbleType = 'primary' | 'secondary';

type BubbleProps = {
  content: string;
  type: BubbleType;
  style?: StyleProp<ViewStyle>;
};

const Container = styled.View<Pick<BubbleProps, 'type'>>`
  padding: 12px;
  border-radius: 10px;
  background: ${({type}) =>
    type === 'secondary' ? styles.SECONDARY_COLOR : styles.PRIMARY_COLOR};
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

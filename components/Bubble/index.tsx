import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

import * as styles from '../../styles';

type BubbleType = {
  primary?: boolean;
  secondary?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Container = styled.View<BubbleType>`
  padding: 12px;
  border-radius: 10px;
  background: ${({secondary}) =>
    secondary ? styles.SECONDARY_COLOR : styles.PRIMARY_COLOR};
`;

const Text = styled.Text<BubbleType>`
  color: ${({secondary}) => (secondary ? '#000' : '#fff')};
`;

type BubbleProps = {
  content: string;
} & BubbleType;

const Bubble = ({content, secondary, primary, style}: BubbleProps) => {
  return (
    <Container primary={primary} secondary={secondary} style={style}>
      <Text primary={primary} secondary={secondary}>
        {content}
      </Text>
    </Container>
  );
};

export default Bubble;

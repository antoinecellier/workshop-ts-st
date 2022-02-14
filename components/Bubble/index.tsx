import React from 'react';
import styled from 'styled-components/native';

import {colors} from '../../theme/constants';

const Container = styled.View`
  padding: 12px;
  border-radius: 10px;
  background: ${({type}) =>
    type === 'secondary' ? colors.secondary : colors.primary};
`;

const Text = styled.Text`
  color: ${({type}) => (type === 'secondary' ? '#000' : '#fff')};
`;

const Bubble = ({content, type, style}) => {
  return (
    <Container type={type} style={style}>
      <Text type={type}>{content}</Text>
    </Container>
  );
};

export default Bubble;

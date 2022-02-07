import React from 'react';
import styled from 'styled-components/native';

import * as styles from '../../styles';

const Container = styled.View`
  padding: 12px;
  border-radius: 10px;
  background: ${({type}) =>
    type === 'secondary' ? styles.SECONDARY_COLOR : styles.PRIMARY_COLOR};
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

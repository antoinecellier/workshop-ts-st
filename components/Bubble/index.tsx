import React from 'react';
import styled from 'styled-components/native';

import * as styles from '../../styles';

const Container = styled.View`
  padding: 12px;
  border-radius: 10px;
  background: ${({secondary}) =>
    secondary ? styles.SECONDARY_COLOR : styles.PRIMARY_COLOR};
`;

const Text = styled.Text`
  color: ${({secondary}) => (secondary ? '#000' : '#fff')};
`;

const Bubble = ({content, secondary, primary, style}) => {
  return (
    <Container primary={primary} secondary={secondary} style={style}>
      <Text primary={primary} secondary={secondary}>
        {content}
      </Text>
    </Container>
  );
};

export default Bubble;

import React from 'react';
import styled from 'styled-components/native';

import {SECONDARY_COLOR} from '../../styles';

import Logo from '../Logo';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${SECONDARY_COLOR};
  padding: 10px 0;
  margin-bottom: 40px;
  justify-content: center;
`;

const Header = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default Header;

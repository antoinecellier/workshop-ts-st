import React from 'react';
import styled from 'styled-components/native';

import Logo from '../Logo';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.secondary};
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

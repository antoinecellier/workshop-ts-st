import React from 'react';
import {Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import CenterView from '../layout/CenterView';
import styled, {useTheme} from 'styled-components/native';

const Colors = styled.View`
  display: flex;
  flex-wrap: wrap;
`;

type BoxProps = {
  backgroundColor: string;
};

const Box = styled.View<BoxProps>`
  padding: ${({theme}) => theme.spacing.large}px;
  margin: ${({theme}) => theme.horizontalSpacing.large}px;
  max-width: 200px;
  text-align: center;
  background-color: ${({backgroundColor}) => backgroundColor};
`;

storiesOf('Tokens / Colors', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('colors', () => {
    const {colors} = useTheme();
    return (
      <Colors>
        <Box backgroundColor={colors.primary}>
          <Text>Primary: {colors.primary}</Text>
        </Box>
        <Box backgroundColor={colors.secondary}>
          <Text>Secondary: {colors.secondary}</Text>
        </Box>
      </Colors>
    );
  });

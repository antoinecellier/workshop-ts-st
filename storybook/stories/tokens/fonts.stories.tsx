import React from 'react';
import {storiesOf} from '@storybook/react-native';

import CenterView from '../layout/CenterView';
import styled, {useTheme} from 'styled-components/native';

const FontsSize = styled.View`
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.View`
  padding: ${({theme}) => theme.spacing.large}px;
  margin: ${({theme}) => theme.horizontalSpacing.large}px;
  text-align: center;
  max-width: 200px;
  background: ${({theme}) => theme.colors.primary};
`;

type TextWithSpecificSizeProps = {
  fontSize: number;
};
const TextWithSpecificSize = styled.Text<TextWithSpecificSizeProps>`
  font-size: ${({fontSize}) => fontSize}px;
`;

storiesOf('Tokens / Fonts', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Fonts size', () => {
    const {fontSize} = useTheme();
    return (
      <FontsSize>
        <Box>
          <TextWithSpecificSize fontSize={fontSize.small}>
            Small
          </TextWithSpecificSize>
        </Box>
        <Box>
          <TextWithSpecificSize fontSize={fontSize.medium}>
            Medium
          </TextWithSpecificSize>
        </Box>
        <Box>
          <TextWithSpecificSize fontSize={fontSize.large}>
            Large
          </TextWithSpecificSize>
        </Box>
        <Box>
          <TextWithSpecificSize fontSize={fontSize.xlarge}>
            XLarge
          </TextWithSpecificSize>
        </Box>
      </FontsSize>
    );
  });

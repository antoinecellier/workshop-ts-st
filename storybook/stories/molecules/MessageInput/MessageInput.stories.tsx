import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean} from '@storybook/addon-knobs';

import styled from 'styled-components/native';

import CenterView from '../../layout/CenterView';

import MessageInput from '../../../../components/MessageInput';

const MessageInputStyled = styled(MessageInput)`
  flex: 0.1;
  padding: 15px;
`;

storiesOf('Molecules / Message input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <MessageInputStyled
      isButtonLabelDisplay={boolean('isButtonLabelDisplay', false)}
      onSend={action('Send message')}
    />
  ))
  .add('with label', () => (
    <MessageInputStyled
      isButtonLabelDisplay={boolean('isButtonLabelDisplay', true)}
      onSend={action('Send message')}
    />
  ));

import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import styled from 'styled-components/native';

import CenterView from '../../layout/CenterView';

import MessageInput from '../../../../components/MessageInput';

const MessageInputStyled = styled(MessageInput)`
  flex: 0.1;
  padding: 15px;
`;

storiesOf('Molecules / Message input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => 'TODO')
  .add('with label', () => 'TODO');

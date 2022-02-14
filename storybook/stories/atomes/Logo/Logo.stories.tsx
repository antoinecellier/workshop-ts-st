import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Logo from '../../../../components/Logo';
import CenterView from '../../layout/CenterView';

storiesOf('Atomes / Logo', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Logo />);

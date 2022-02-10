import React from 'react';

import {storiesOf} from '@storybook/react-native';
import {select, text} from '@storybook/addon-knobs';

import Bubble from '../../../../components/Bubble';
import CenterView from '../../layout/CenterView';
import {ColorVariants} from '../../../../theme/constants';

storiesOf('Atomes / Bubble', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Primary', () => 'TODO')
  .add('Secondary', () => 'TODO')
  .add('On several lines', () => 'TODO');

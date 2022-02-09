import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {object} from '@storybook/addon-knobs';

import Avatar from '../../../../components/Avatar';
import CenterView from '../../layout/CenterView';

const defaultImageSource: ImageSourcePropType = {
  uri: 'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png',
};

storiesOf('Atomes / Avatar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with default image source', () => (
    <Avatar imageSource={object('imageSource', defaultImageSource)} />
  ));

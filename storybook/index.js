import React from 'react';
import {AppRegistry} from 'react-native';

import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

import {name as appName} from '../app.json';

import './rn-addons';
import {CustomTheme} from '../theme';

// enables knobs for all stories
addDecorator(withKnobs({escapeHTML: false}));
addDecorator(Story => <Story />);

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

const StorybookComponent = () => (
  <CustomTheme>
    <StorybookUIRoot />
  </CustomTheme>
);

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent(appName, () => StorybookComponent);

export default StorybookComponent;

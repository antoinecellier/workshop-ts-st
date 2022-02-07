import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Config from 'react-native-config';

import StorybookUI from './storybook';
import {MessageListContextProvider} from './business/MessageListContext';

import Header from './components/Header';
import Conversation from './screens/Conversation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <MessageListContextProvider>
        <Conversation />
      </MessageListContextProvider>
    </SafeAreaView>
  );
};

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUI : App;

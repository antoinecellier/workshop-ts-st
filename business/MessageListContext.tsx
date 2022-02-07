import React, {useContext} from 'react';
import {createContext, useState} from 'react';

const MessageListContext = createContext({
  state: {
    messages: [],
  },
  addMessage: (state, message) => console.log('whoops'),
});

export const MessageListContextProvider = ({
  children,
}) => {
  const [state, setState] = useState({messages: []});

  const addMessage = (state, message) => {
    const newState = {...state, messages: [...state.messages, message]};
    setState(newState);
    setTimeout(() => {
      setState({
        ...newState,
        messages: [
          ...newState.messages,
          {
            sentAt: new Date(),
            owner: false,
            content: "c'est pas faux",
            avatar:
              'https://media.tenor.com/images/ac9efcf7bafca3c440df016f98e9e7d1/raw',
          },
        ],
      });
    }, 1000);
  };

  return (
    <MessageListContext.Provider value={{state, addMessage}}>
      {children}
    </MessageListContext.Provider>
  );
};

export const useMessageListContext = () => {
  const context = useContext(MessageListContext);
  if (context === undefined) {
    throw new Error(
      'useMessageListContext must be used within a MessageListContextProvider',
    );
  }

  return context;
};

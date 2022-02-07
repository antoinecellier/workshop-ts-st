import React, {ReactNode, useContext} from 'react';
import {createContext, useState} from 'react';

export type Message = {
  sentAt: Date;
  content: string;
  owner: boolean;
  avatar: string;
};

type MessageListContextState = {messages: Message[]};

type MessageListContextValue = {
  state: MessageListContextState;
  addMessage: (state: MessageListContextState, message: Message) => void;
};

const MessageListContext = createContext<MessageListContextValue>({
  state: {
    messages: [],
  },
  addMessage: () => console.log('whoops'),
});

type MessageListContextProviderProps = {
  children: ReactNode;
};

export const MessageListContextProvider = ({
  children,
}: MessageListContextProviderProps) => {
  const [state, setState] = useState<MessageListContextState>({messages: []});

  const addMessage = (
    previousState: MessageListContextState,
    message: Message,
  ) => {
    const newState = {
      ...previousState,
      messages: [...previousState.messages, message],
    };
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

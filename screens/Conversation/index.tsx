import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';

import Bubble from '../../components/Bubble';
import MessageInput from '../../components/MessageInput';
import Avatar from '../../components/Avatar';
import {useMessageListContext} from '../../business/MessageListContext';

const ContainerMessages = styled(ScrollView)`
  flex: 0.9;
`;

const MessageRow = styled.View`
  flex-direction: ${({owner}) => (owner ? 'row-reverse' : 'row')};
  justify-content: flex-start;
  padding: 0 10px;
`;

const BubbleStyled = styled(Bubble)`
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

const MessageInputStyled = styled(MessageInput)`
  flex: 0.1;
  padding: 15px;
`;

const Conversation = () => {
  const tchatRef = useRef(null);
  const {state, addMessage} = useMessageListContext();

  const onSend = (msg: string) => {
    addMessage(state, {
      sentAt: new Date(),
      owner: true,
      content: msg,
      avatar:
        'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png',
    });
  };

  return (
    <>
      <ContainerMessages
        ref={tchatRef}
        onContentSizeChange={() => tchatRef?.current?.scrollToEnd()}>
        {state.messages.map(message => (
          <MessageRow owner={message.owner} key={message.sentAt.toString()}>
            <Avatar imageSource={{uri: message.avatar}} />
            <BubbleStyled
              content={message.content}
              secondary={!message.owner}
            />
          </MessageRow>
        ))}
      </ContainerMessages>
      <MessageInputStyled isButtonLabelDisplay={false} onSend={onSend} />
    </>
  );
};

export default Conversation;

import React, {useState} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Input = styled.TextInput`
  flex: 5;
  padding: 10px;
  border: 1px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-color: ${({theme}) => theme.colors.primary};
`;

const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${({theme}) => theme.colors.primary};
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  margin-right: 5;
`;

type MessageInputProps = {
  onSend: (message: string) => void;
  style?: StyleProp<ViewStyle>;
  isButtonLabelDisplay: boolean;
};

const MessageInput = ({
  onSend,
  style,
  isButtonLabelDisplay = true,
}: MessageInputProps) => {
  const [message, onChangeMessage] = useState('');
  const onSendPress = () => {
    onSend(message);
    onChangeMessage('');
  };
  return (
    <Container style={style}>
      <Input
        onChangeText={onChangeMessage}
        value={message}
        placeholder="Enter your message"
      />
      <TouchableOpacity onPress={onSendPress}>
        <FontAwesomeIconStyled icon={faPaperPlane} color="#fff" />
        {isButtonLabelDisplay && <ButtonText>Send</ButtonText>}
      </TouchableOpacity>
    </Container>
  );
};

export default MessageInput;

import React, {useState} from 'react';
import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

import * as styles from '../../styles';

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
  border-color: ${styles.SECONDARY_COLOR};
`;

const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${styles.PRIMARY_COLOR};
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const MessageInput = ({
  onSend,
  style,
  isButtonLabelDisplay = true,
}) => {
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
        <FontAwesomeIcon
          icon={faPaperPlane}
          color="#fff"
          style={{marginRight: 5}}
        />
        {isButtonLabelDisplay && <ButtonText>Send</ButtonText>}
      </TouchableOpacity>
    </Container>
  );
};

export default MessageInput;

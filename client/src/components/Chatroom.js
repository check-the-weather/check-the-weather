import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

import VGroup from 'components/VGroup';
import ChatroomInput from 'components/ChatroomInput';

import styles from './Chatroom.module.scss';

function Chatroom({ name }) {
  const socketRef = useRef();

  const [textInput, setTextInput] = useState('');
  const [chat, setChat] = useState([]);

  socketRef.current.on("newperson", (args) => {
    console.log(args); 
  });

  useEffect(() => {
    socketRef.current = io('http://localhost:8080');
    socketRef.current.on('receive-message', ({ name, message }) => {
      console.log(`${name}: ${message}`)
      setChat([...chat, { name, message }]);
    });

    return () => socketRef.current.disconnect();
  }, [chat]);

  function sendMessage() {
    socketRef.current.emit('send-message', { name, message: textInput });
    setTextInput('') // Clear the input
  }

  function onInputChange(event) {
    setTextInput(event.target.value);
  }

  function onKeyDown(event) {
    if (event.keyCode === 13)  {
      sendMessage();
    }
  }

  function renderChat() {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span className={styles.BlueText}>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <VGroup className={styles.Chatroom}>
      <VGroup className={styles.ChatContainer}>
        {renderChat()}
      </VGroup>
      <ChatroomInput value={textInput} onChange={onInputChange} onSubmit={sendMessage} onKeyDown={onKeyDown} />

    </VGroup>
  );
}

export default Chatroom;

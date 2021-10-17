import React from 'react';

import Group from 'components/Group';

import styles from './ChatroomInput.module.scss'

function ChatroomInput({ value, onChange, onSubmit, onKeyDown }) {
  return (
    <Group className={styles.ChatroomInputRow}>
      <input
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder='Type a message...'
        className={styles.ChatroomInput}
      />
      <button onClick={onSubmit} className={styles.ChatroomInputButton}>Send</button>
    </Group>
  );
}

export default ChatroomInput;

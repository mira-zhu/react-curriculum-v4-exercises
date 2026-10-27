// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/

import { useState } from 'react';

const initMessage = 'Hello, friend!';

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState(initMessage);

  function handleChange() {
    if (message === 'Hello, ' + name + '!') {
      setMessage('Hi, ' + name + '!');
    } else {
      setMessage('Hello, ' + name + '!');
    }
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// I used state to track changes to the message.

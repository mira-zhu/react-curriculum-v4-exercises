// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  const button = useRef(null);
  const clickCount = useRef(0);

  function handleClick() {
    clickCount.current++;
    button.current.textContent = `${clickCount.current} Clicks`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={button} onClick={handleClick}>
        0 Clicks
      </button>
    </div>
  );
}

import { useState } from 'react';
import './App.css';

const App = () => {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi');

  if (isSent) {
    return <h1>Your message has been submitted!</h1>
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
      sendMessage(message);
    }}> 
      <textarea placeholder={message}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button>Send</button>
    </form>
  )
}

function sendMessage(message) {
  //
}

export default App


// The onSubmit event handler executes.
// setIsSent(true) sets isSent to true and queues a new render.
// React re-renders the component according to the new isSent value.

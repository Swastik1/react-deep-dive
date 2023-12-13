import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState('typing');

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) {
    return <h1>Thanks for the feedback!</h1>
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>How was your stay at The Prancing Pony?</p>
        <textarea
          disabled={isSending}
          value={text}
          onChange={handleChange}
        ></textarea>
        <br />
        <button disabled={isSending} >Send</button>
        {isSending && <p>Sending ...</p>}
      </form>
    </div>
  )
}

const sendMessage = (text) => {
  return new Promise(resolve => setTimeout(resolve,2000))
}

export default App
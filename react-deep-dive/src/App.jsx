import React, { useState } from 'react'

const App = () => {
  const [message, setMessage] = useState("Hello");
  const [to, setTo] = useState('Alice');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert(`You sent ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To: {' '}
        <select value={to}
          onChange={e => setTo(e.target.value)}
        >
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea onChange={e => setMessage(e.target.value)}
        placeholder="Message"
        value={message}
      />
      <button type='Submit'>Submit</button>

    </form>
  )
}

export default App
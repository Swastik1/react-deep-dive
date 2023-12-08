import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [answer, setAnswer] = useState(""); 
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);

  if (status === 'success') {
    return <h2>That's right!</h2>
  }

  const handleChange = (e) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting')
    try {
      await submitForm(answer);
      setStatus('success')
    } catch (err) {
      setStatus('typing');
      setError(err)
    }
  } 

  return (
    <div>
      <h2>City Quiz: </h2>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form onSubmit={handleSubmit}>
        <textarea value={answer} onChange={handleChange}  disabled={ status === 'submitting'} />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
        {error !== null && 
          <p className="Error">{error.message }</p>
        } 
      </form>
    </div>
  )
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
    if (shouldError) {
      reject(new Error("Good guess but wrong answer!"))
    } else {
      resolve();
    }
    },1500)
  })
}

export default App;
import { sculptureList } from './data';
import { useState } from 'react';
import './App.css'

export default function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <h1>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h1>
      <p>({index + 1} of {sculptureList.length})</p>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
      <button onClick={handleClick}>Next</button>
    </>
  )
} 

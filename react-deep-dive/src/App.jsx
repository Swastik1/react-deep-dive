import { sculptureList } from './data';
import { useState } from 'react';
import './App.css'

export default function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let hasNext = index < sculptureList.length - 1;
  let hasPrev = index > 0
  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handlePrevClick() {
    if (hasPrev)
    setIndex(index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <h1>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h1>
      <button onClick={handleClick} disabled={!hasNext}>Next</button>
      <button onClick={handlePrevClick} disabled={!hasPrev}>Previous</button>
      <p>({index + 1} of {sculptureList.length})</p>
      <button onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
      {showMore && <p>{sculpture.description}</p>}
      <br />
      <br />
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  )
} 

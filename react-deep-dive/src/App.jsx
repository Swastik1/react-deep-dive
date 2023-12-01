import React, { useState } from 'react'

const App = () => {
  const [walk, setWalk] = useState(true);

  const handleClick = () => {
    setWalk(!walk);
  }

  return (
    <div>
      <button onClick={handleClick}>Change to {walk ? 'Stop' : 'Walk'} </button>
      <h1 style={{color: walk ? 'darkgreen' : 'darkred'}}>{walk ? 'Walk' : 'Stop' }</h1>
    </div>
  )
}

export default App
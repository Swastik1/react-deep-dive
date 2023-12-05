import React, { useState } from 'react'

const initialCounters = [
  0,0,0
]

const CounterList = () => {
  const [counters, setCounters] = useState(initialCounters);

  const handleClick = (e, index) => {
    e.preventDefault()
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    })
    setCounters(nextCounters);
  }

  const counterContent = counters.map((counter, i) => {
    return (
      <li key={i}>{counter}
        <button onClick={(e) => handleClick(e,i)}> +1 </button>
      </li>
    )
  })

  return (
    <div>
      <ul>
        {counterContent}
      </ul>
    </div>
  )
}

export default CounterList;
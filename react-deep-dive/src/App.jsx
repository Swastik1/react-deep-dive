import React from 'react'
import { getFinalState } from './processQueue';
function increment(n) {
  return n + 1;
}
increment.toString = () => 'n => n + 1';

const App = () => {
  return (
    <>
      <TestCase
        baseState={0}
        queue={[1, 1, 1]}
        expected={1}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[increment,increment,increment]}
        expected={3}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[5,increment]}
        expected={6}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[5,increment,42]}
        expected={42}
      />
      
    </>
  )
}

function TestCase({
  baseState,
  queue,
  expected
}) {

  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>BaseState: <b>{baseState}</b></p>
      <p>Queue: <b>[{queue.join(',')}]</b></p>
      <p>Expected Result: <b>{ expected }</b></p>
      <p style={{ color: actual === expected ? 'green' : 'red' }}>
        Your Result: <b>{actual}</b>
        {' '} 
        ({actual === expected ? 'correct' : 'wrong'})
      </p>
    </>
  )
}

export default App
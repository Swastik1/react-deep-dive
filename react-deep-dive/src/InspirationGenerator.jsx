import React from 'react'
import inspirations from './inspirations';
import FancyText from './FancyText';
import Color from './Color';

const InspirationGenerator = ({ children }) => {

  const [index, setIndex] = React.useState(0);
  const inspiration = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);
  return (
    <>
      <p>Your {inspiration.type} is :- </p>
      {inspiration.type === 'quote' ? <FancyText text={inspiration.value} /> : <Color value={inspiration.value} />}
      <button onClick={next}>Inspire me</button>
      {children}
    </>
  )
}

export default InspirationGenerator;
import React from 'react'
import quotes from './quotes';
import FancyText from './FancyText';

const InspirationGenerator = ({ children }) => {

  const [index, setIndex] = React.useState(0);
  const quote = quotes[index];
  const next = () => setIndex((index + 1) % quotes.length);
  return (
    <>
      <p>Your Inspirational quote is :- </p>
      <FancyText text={quote} />
      <button onClick={next}>Inspire me</button>
      {children}
    </>
  )
}

export default InspirationGenerator;
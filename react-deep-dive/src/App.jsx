import React, { useState } from 'react'

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

const App = () => {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleClick = (item) => {
    setSelectedItem(item)
  }

  const itemContent = Array.isArray(items) ? (items.map((item) => (
    <li key={item.id}>{item.title} {" "}
      <button onClick={() => handleClick(item)}>Choose</button>
    </li>
  ))) : (
      <div>Loading ...</div>
  )

  return (
    <div>
      <h2>What's your travel snack?</h2>
      <ul>
        {itemContent}
      </ul>
      <p>You selected { selectedItem.title}</p>
    </div>
  )
}

export default App
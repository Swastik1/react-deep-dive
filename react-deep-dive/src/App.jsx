import React, { useState } from 'react'

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

const App = () => {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(item => item.id === selectedId);

  const handleClick = (itemID) => {
    setSelectedId(itemID)
  }

  const handleItemChange = (id, e) => {
    setItems(items.map((item) => {
      if (item.id === id) {
        return {...item, title: e.target.value}
      } else {
        return item;
      }
    }))
  }

  const itemContent = Array.isArray(items) ? (items.map((item) => (
    <li key={item.id}><input value={item.title} onChange={(e) => handleItemChange(item.id,e)} />
      <button onClick={() => handleClick(item.id)}>Choose</button>
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
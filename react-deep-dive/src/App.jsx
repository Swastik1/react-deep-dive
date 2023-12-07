import React from 'react'
import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];


const List = () => {
  const [items, setItems] = useState(initialList);

  const handleClick = () => {
    const nextItems = [...items];
    nextItems.reverse();
    setItems(nextItems);
  };

  const itemContent = items.map((item) => {
    return (
      <li key={item.id}>{item.title}</li>
    )
  });
    

  return (
    <div>
      <button onClick={handleClick}>Reverse</button>
      <ul>{itemContent}</ul>
    </div>
  )
}

export default List;
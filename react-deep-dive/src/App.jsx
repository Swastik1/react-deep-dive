import React, { useState } from 'react'


let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
]

const List = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleClick = () => {
    if (!name.trim()) {
      alert("Elina you suck!!");
      return;
    }
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt),
    ]
    setArtists(nextArtists);
    setName("");
  }

  const artistContent = artists.map((artist) => {
    return (
      <li key={artist.id}>{ artist.name}</li>
    )
  })

  return (
    <div>
      <h1>Inspiring Sculptors</h1>
      <input  value={name} onChange={handleChange} />
      <button onClick={handleClick}>Insert</button>
      <ul>{artistContent}</ul>
    </div>
  )
}

export default List
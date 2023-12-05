import React, { useState } from 'react'

let nextId = 0;

const List = () => {
  const [name, setName] = useState("");
  const [artists, setArtist] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    setArtist([
      ...artists,
      {id: nextId++, name: name}
    ])
  }

  const listArtists = artists.map((artist) => {
    return <li key={artist.id}>{artist.name}</li>
  }) 

  return (
    <div>
      <h1>Inspiring Sculptors</h1>
      <input value={name} onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
      <ul>
        {listArtists}
      </ul>
    </div>
  )
}

export default List;
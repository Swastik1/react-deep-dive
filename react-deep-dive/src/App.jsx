import React from 'react'
import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

const BucketList = () => {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);
    
  const handleToggleMyList = (artworkId,nextSeen) => {
    setMyList(myList.map((artwork) => {
      if (artwork.id === artworkId) {
        return {...artwork, seen: nextSeen}
      } else {
        return artwork;
      }
    }))
  } 

  const handleToggleYourList = (artworkId, nextSeen) => {
    setYourList(yourList.map((artwork) => {
      if (artwork.id === artworkId) {
        return {...artwork, seen: nextSeen}
      } else {
        return artwork;
      }
    }))
  }

  return (
    <div>
      <h1>Art Bucket List: </h1>
      <h2>My List of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your List of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </div>
  )
}

const ItemList = ({artworks,onToggle}) => {
  return (
    <ul>
      {artworks.map((artwork) => {
        return (
          <li key={artwork.id}>
            <label>
              <input type="checkbox"
                checked={artwork.seen}
                onChange={(e) => {
                  onToggle(
                    artwork.id,
                    e.target.checked
                  )
                }}
              />
              {artwork.title}
            </label>
          </li>
        )
      })}
    </ul>
  )
}

export default BucketList;
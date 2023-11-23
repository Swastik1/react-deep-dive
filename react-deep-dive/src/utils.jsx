import React from 'react'

export const getImageUrl = (person) => {
  return (
    'https://i.imgur.com/' + person.imageId + 's.jpg'
  )
}

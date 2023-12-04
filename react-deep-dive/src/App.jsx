import { useState } from "react";
import './App.css';
import React from 'react'

const Form = () => {

  const [person, setPerson] = useState(
    {
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  })

  const handlePerson = (e) => {
    setPerson({
      ...person,
      [e.target.item]: e.target.value
    })
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Data Form</h1>

      <label> Name: <input
        item="name"
        value={person.name}
        onChange={handlePerson} />
      </label>
      <br />

      <label> Title: <input
        item="title"
        value={person.artwork.title}
        onChange={handlePerson} />
      </label>
      <br />

      <label> City: <input
        item="city"
        value={person.artwork.city}
        onChange={handlePerson} />
      </label>
      <br />
      <label> Image: <input
        item="image"
        value={person.artwork.image}
        onChange={handlePerson} />
      </label>

      <p><h3>{person.artwork.title}</h3>{" "} by {" "}
        <b>{person.name}</b>{" "}
        (located in {" "}
        {person.artwork.city}){" "}
      </p>

      <img src={person.artwork.image} alt={person.artwork.ti} />
    </div>
  )
}

export default Form
import { useState } from "react";
import './App.css';
import React from 'react'

const Form = () => {

  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com'
  })

  const handlePerson = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Data Form</h1>

      <label>FirstName: <input
        name="firstName"
        value={person.firstName}
        onChange={handlePerson} />
      </label>
      <br />

      <label>LastName: <input
        name="lastName"
        value={person.lastName}
        onChange={handlePerson} />
      </label>
      <br />

      <label>Email: <input
        name="email"
        value={person.email}
        onChange={handlePerson} />
      </label>

      <p>{person.firstName}{" "}
        {person.lastName}{" "}
        ({person.email})
      </p>
    </div>
  )
}

export default Form
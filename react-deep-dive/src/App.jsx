import { useState } from "react";
import './App.css';
import React from 'react'

const Form = () => {

  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com'
  })

  const handleFirstname = (e) => {
    setPerson({
      ...person,
      firstName: e.target.value
    })
  }

    const handleLastname = (e) => {
    setPerson({
      ...person,
      lastName: e.target.value
    })
    }
  
    const handleEmail = (e) => {
    setPerson({
      ...person,
      email: e.target.value
    })
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Data Form</h1>

      <label>FirstName: <input
        value={person.firstName}
        onChange={handleFirstname} />
      </label>
      <br />

      <label>LastName: <input
        value={person.lastName}
        onChange={handleLastname} />
      </label>
      <br />

      <label>Email: <input value={person.email} onChange={handleEmail} /></label>

      <p>{person.firstName}{" "}
        {person.lastName}{" "}
        ({person.email})
      </p>
    </div>
  )
}

export default Form
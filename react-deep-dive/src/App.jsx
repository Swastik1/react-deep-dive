import React, { useState } from 'react'

const App = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: ""
  })

  const handleFirstNameChange = (e) => {
    setUser({...user, firstName: e.target.value})
  }

  const handleLastNameChange = (e) => {
    setUser({...user, lastName: e.target.value})
  }

  const fullName = user.firstName + " " + user.lastName;


  return (
    <div>
      <h2>Let's check you in</h2>
      <label>First Name: 
        <input type="text" value={user.firstName} onChange={handleFirstNameChange}  />
      </label>
      <br />
      <label>Last Name:
        <input type="text" value={user.lastName} onChange={handleLastNameChange}/>
      </label>
      <br />
      <label>Your ticket will be issued to: <b>{fullName}</b> </label>  
    </div>
  )
}

export default App
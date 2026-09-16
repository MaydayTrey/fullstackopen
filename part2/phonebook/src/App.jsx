import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'
import PersonForm from './components/PersonForm'
import CRUD from './services/personCom'
import axios from 'axios'

import Notification from './components/Notification'
import './index.css'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterData, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    console.log('effect in use')
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log(`Response fulfilled with: `, response.status)
        console.log(`Returned data:`, response.data)
        setPersons(response.data)
      })
  }, [])
  console.log(`Quantity of people: `, persons.length)

  /* Have to have it so an added person is sent to the server using POST */

const addPerson = (event) => {
  event.preventDefault()

  const existing = persons.find(person => person.name.trim() === newName.trim())

  if (existing) {
    const confirmed = window.confirm(
      `${newName} is already added to the phonebook. Replace the old number with a new one?`
    )
    if (!confirmed) return

    const changedPerson = { ...existing, number: newNumber }

    CRUD.updatePerson(existing.id, changedPerson)
      .then(response => {
        setPersons(persons.map(person =>
          person.id !== existing.id ? person : response.data
        ))
        setNewName('')
        setNewNumber('')
        setMessage(`Updated the number for ${existing.name}`)
        setTimeout(() => setMessage(null), 5000)
      })
    return
  }

  CRUD.newPerson({ name: newName, number: newNumber })
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
      setMessage(`Added ${response.data.name}`)
      setTimeout(() => setMessage(null), 5000)
    })
}

const deletePersonHandler = (id) => {
  const isDeleteUser = window.confirm("Are you sure you want to delete this person?")
  if(isDeleteUser){
    CRUD.deletePerson(id)
      .then(response => {
        console.log(response.data)
        setPersons(persons.filter(person => person.id !== id))
      })
  } else{
    console.log("Not deleted")
  }
}



const personsToShow = persons.filter(person =>
  person.name.toLowerCase().includes(filterData.toLowerCase())
)

  /* 
    const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)
  */

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterData = (event) => {
  setFilter(event.target.value)
}



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <SearchFilter filterData={filterData} handleFilterData={handleFilterData} />
      <PersonForm addPerson={addPerson} 
      newName={newName} 
      handlePersonChange={handlePersonChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePersonHandler={deletePersonHandler}/>
    </div>
  )
}

export default App
/*
The following is extracted communications capacity and functions with the back-end JSON-Server.
9-16-26
Rationale:
The example shown in FSO has us hardcode the base URL which will repeatedly be used for various commands.
and implements Axios.
*/

import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(baseUrl);
}


//This is literally the code we had prior, just condensed separation of responsibility.\
//SENDS A PERSON OBJECT FROM APP TO THE SERVER WHERE IT IS POSTED
const newPerson = personObject => {
    return axios.post(baseUrl, personObject)
}

//I am pasting in the code we have made..
/*
This before the refactor, this existed within the else chain of our addPerson function:
    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      }) // So right now this is 

*/

const updatePerson = (id, personObject) => {
    return axios.put(`${baseUrl}/${id}`, personObject)
}
//Updating a person requires we go in and access the resource being updated, this will also require a map rebuild when we update someone.
//Our current code doesn't really facilitate it at all, we don't have a update button, etc. 

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}


export default {getAll, newPerson, updatePerson, deletePerson}

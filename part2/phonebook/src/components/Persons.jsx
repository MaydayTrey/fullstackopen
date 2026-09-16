      
const Persons = ({ personsToShow, deletePersonHandler }) => {
    return (
    <div>
        {personsToShow.map((person) => 
        <div key={person.id}>
        <p key={person.name}>{person.name} {person.number}</p>
        <button type="button" onClick={() => deletePersonHandler(person.id)}>delete</button>
        </div>)}
    </div>
    )
}



export default Persons

/*
Names within this that are not defined within the component, and thus must be props:
1) personsToShow 

person is just it's own parameter within map and thus doesn't exist outside
X) person.name
X) person.number

*/


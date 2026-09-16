const PersonForm = ({ addPerson, newName, handlePersonChange, newNumber, handleNumberChange}) => {
    return (
      <form onSubmit={addPerson}>
        <h2>Add a new</h2>
        <div>
          name: <input value={newName}
          onChange={handlePersonChange} required/>
        </div>
        <div>number: <input value={newNumber}
        onChange={handleNumberChange} required type='tel'/></div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

    )
}

export default PersonForm
/*
What exists within this and isn't defined here.
1) addPerson - essentially a function constructor, makes an object and checks if that name already exists prior to allow submission then clearing state
2) newName - state
3) handlePersonChange


Note: The pattern I see is we essentially alter state for rendering, then we must have to form data based on how we need it within the render, 
and then we wipe the state. So it's almost like a pass off situation. I can definitely grasp this, but want more practice.
I like this more than Vanilla JS. 
Everything here is use state, then for state changing give it to a handler.
Do you ever use the setFunction of some state within the JSX itself?


*/
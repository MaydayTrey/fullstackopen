import { useState } from 'react'




const Button = ({text, onClick}) =>{
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0)) //Gives us an array of 0's of length anecdotes
  const handleNext = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const handleVote = () => {
    const voteCopy = [...votes];
    voteCopy[selected]++
    setVote(voteCopy);
  } 
  const maxVal = Math.max(...votes)
  const maxIndex = votes.indexOf(maxVal)
  const topAnecdote = anecdotes[maxIndex]
  //
  //So I need to generate an index randomly and pull it out, and show that anexdote
  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]}</p>
      <Button onClick={handleNext} text='next anecdote' />
      <Button onClick={handleVote} text='vote'/>
      <h1>Anecdotes with the most votes</h1>
      <p>{topAnecdote}</p>
      <p>has {maxVal} votes</p>
    </div>
  )
}

export default App

/*
Alright, so I went ahead and read what we need here, so we have a list of fixed length; an array.
If we generate an array full of zeros to represent voting status (not what I'd do in an actual use case, in that instance I'd use object/key pairs), we will make it positional based.
So anecdotes[0] is "Blah blah blah"
and anecdotesVotes[0] corresponds to the value of votes for that anecdote.
Positional based relation is not something I consider very scalable, but what do I know, I'm new to this stuff.

1) Generate a random index number based off the length of an array:
Faintly remember this is math.Floor usage, let me check google.
Math.floor(Math.random() * array.length)

Math.random generate a random number 0-1 inclusive and 1 exclusive (Means you never get the full length?)
Array.length --> Scales that by the length of the array, essentially it's just a percentage of the array..
0.5 of an array is the 50% marker of it. 
"Math.floor(): Rounds the decimal down to the nearest whole integer. Because Math.random() never actually hits 1, the multiplied result will never hit the exact length of the array, preventing an "out of bounds" index error."

I.e if we have an array of length 100, math.random generates 0.674, so we scale this by 100 for 67.4 then floor chops off the decimal place so we have a usable index. 
Alright that gives us an index value from it's length, this is what we will use to access an anecdote based on position.
Then, once we go in and access that anecdote we want to show votes, which can be our initialized array full of zeros and is in proportionate size to the anecdotes array.
So I'm assuming this is our [votes, setVotes] = [The actual code to generate zeros]
then setVotes goes in and access the setVotes(votes[X]) and it has to increment that value by one?

The illustration of that with the most votes will have to be a maximum check of the votes array, and then we'd pull anecdotes[X] for the X index that has the highest value
Checking google I see the spread option here is used
const max = Math.max(...numbers);
--> This assigns max to the maximum element of ...numbers --> but this also fails to retain our index value doesn't it?
const maxIndex = numbers.indexOf(maxVal);
The risk of course being if we had duplicates and wanted some logic on which to show this would not be the route to go, but the guide says it doesn't matter if they're tied, just display one.


So in total:
Array(anecdotes.length).fill(0) --> Gives us the empty zeros for votes positonally based

Math.floor(Math.random() * array.length) --> Gives us a random index number based on our array length

const max = Math.max(...arrayOfVotes); ---> Finds the highest vote value (mind you there could be ties..)

const maxIndex = arrayOfVotes.indexOf(maxVal); ---> Returns the first occurence of the highest value


Misconception on my end:
setVotes takes the entire new array, not one element. It replaces the whole piece of state.
So the handler is three steps:
Copy the array. [...votes].
Increment the slot you care about, on the copy.
Pass the copy to setVotes.

+ On my end,
personally, everything will be tied at the start, so I'd probably add a check, where the anecdote with the most votes didn't show if all of votes were equal to 0, but just going to meet requirements here and submit.


*/
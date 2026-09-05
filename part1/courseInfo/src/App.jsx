const Header = (prop) => {
  return (
    <h1>{prop.course}</h1>
  )
}


const Part = (props) => {
  return (
    <p>{props.partName} {props.partExercises}</p>
  )
}

const Content = (props) => {
  /* For each object in the prop Array, I want to pull out:
  propName, and propExercises, and I want to create
     <p>
        {partName} {partExercises}
      </p>
      { contentArray: [ ...the three objects... ] }
  */
  //How to turn N objects ionto N elements?
  //JSX, can't use statements, they must be expressions. Use .map()

  return (
      <div>
      {props.contentArray.map((part) => (
        <Part key={part.partName} partName={part.partName} partExercises={part.partExercises} />
      ))}
    </div>
  )
}

/* I had content generate the parts and exercises number prior to reaching the end
and then I saw they wanted it structured as parts.
{props.contentArray.map((part) => { return <p key={part.partName}>{part.partName} {part.partExercises}</p>})}  */


const Total = (prop) => {
  return (
    <div>
      <p>Number of exercises {prop.total}</p>
    </div>
  )
}


const App = () => {
  // const-definitions
  const course="Half Stack application development";
  const content = [{partName: 'Fundamentals of React', partExercises: 10}, {partName: 'Using props to pass data', partExercises: 7}, {partName: 'State of a component', partExercises: 14}]
  const total = content.reduce((accumulator, currentPart) => accumulator + currentPart.partExercises, 0)
/*
I will need to create the components and the props necessary. 
Starting with Header, which will just show the course, which we define
in the App JS
*/
  return (
    <div>
      <Header course={course} />
      <Content contentArray={content} />
      <Total total={total} />
    </div>
  )
}
export default App
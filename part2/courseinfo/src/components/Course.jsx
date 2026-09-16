/* 
Just copied these over from part1/courseInfo, coming off a couple days away, so these notes are helpful. But it shows it's important to date the notes.
- TG, 9/12/26.



*/


const Header = (prop) => {
  return (
    <h1>{prop.course}</h1>
  )
}


const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
      <div>
      {props.content.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}


const Total = (prop) => {
  return (
    <div>
      <p><strong>total number of exercises <em>{prop.total}</em></strong></p>
    </div>
  )
}

const Course = ({ course }) => {
   const total = course.parts.reduce((accumulator, currentPart) => accumulator + currentPart.exercises, 0)
  return (
    <>
    <Header course={course.name}/>
    <Content content={course.parts}/>
    <Total total={total} />
    </>
  )
}

export default Course
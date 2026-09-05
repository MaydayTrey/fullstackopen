import { useState } from 'react'

//We need to pass into this component, that when it is clicked we change state - the click count
//And we need the buttons text to be that which we specify

const Button = ({ text, onClick }) => {
  console.log("App state changed, all buttons re-render")
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Header = ({ text }) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

const StatisticsLine = ({text, tableData}) => {
  return (
    <>
    <tr>
      <th>{text}</th>
      <td>{tableData}</td>
    </tr>
    </>
  )
}

const StatisticsTable = ({total, average, positiveRate, good, bad, neutral}) => {
  if(total > 0){
    return (
      <table>
        <tbody>
            <StatisticsLine text='good' tableData={good}/>
            <StatisticsLine text="neutral" tableData={neutral}/>
            <StatisticsLine text="bad" tableData={bad}/>
            <StatisticsLine text="all" tableData={total}/>
            <StatisticsLine text="average" tableData={average}/>
            <StatisticsLine text="positive" tableData={`${positiveRate} %`}/>
        </tbody>
      </table>
    )
  } else {
    return (
      <p>No feedback given.</p>
    )
  }
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0) //Holds state for the good button
  const [neutral, setNeutral] = useState(0) //Holds state for the neutral button
  const [bad, setBad] = useState(0) //Holds state for the bad button 
  const handleGood = () => setGood(good +1)
  const handleNeutral = () => setNeutral(neutral +1)
  const handleBad = () => setBad(bad +1)
  const total = good + neutral + bad
  //I guess there's a scoring system here? the feedback values are: good 1, neutral 0, bad -1
  const average = (good - bad) / total
  const positiveRate = (good / total) * 100
  return (
    <div>
      <Header text='give feedback'/>
      <Button text='good' onClick={() => handleGood()}/>
      <Button text='neutral' onClick={() => handleNeutral()}/>
      <Button text='bad' onClick={() => handleBad()}/>
      <Header text='statistics' />
      <StatisticsTable total={total} average={average} positiveRate={positiveRate} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
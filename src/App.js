import React from 'react'

// part a)

    // const App = () => {
    //   const now = new Date()
    //   const a = 10
    //   const b = 20
    //   // props are passed in here and given to react components as parameters, in this case, name="George" in the Hello component(line 10) gets passed in as props(line 20)
    //   return (
    //     <div>
    //       <p><Hello name="George" /> it is {now.toString()}</p>
    //       <p>
    //         {a} plus {b} is {a + b}
    //       </p>
    //     </div>
    //   )
    // }

    // export default App

    // const Hello = (props) => {
    //   return (
    //     <div>
    //       <p>Hello {props.name}</p>
    //     </div>
    //   )
    // }

// part b)

    // const Hello = (props) => {
    //   return (
    //     <div>
    //       <p>
    //         Hello {props.name}, you are {props.age} years old
    //       </p>
    //     </div>
    //   )
    // }
    
    // const App = () => {
    //   const name = 'Peter'
    //   const age = 10
    
    //   return (
    //     <div>
    //       <h1>Greetings</h1>
    //       <Hello name="Maya" age={26 + 10} />
    //       <Hello name={name} age={age} />
    //     </div>
    //   )
    // }
    // export default App


    // part c)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
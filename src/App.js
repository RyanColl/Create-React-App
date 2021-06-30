// import React from 'react'
import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

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


    // USING THIS


// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
//   let partNum = 0;
//   return (
//     <div>
//       <h1>{course.name}</h1>
//       {course.parts.forEach((part) => {
//         <p>
//         {part.name} {part.exercises}
//         </p>
//         partNum++
//       })}
//       <p>Number of exercises {partNum}</p>
//     </div>
//   )
// }

// export default App


// // basic class layout
// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   greet() {
//     console.log('hello, my name is ' + this.name)
//   }
// }

// const adam = new Person('Adam Ondra', 35)
// adam.greet()

// const janja = new Person('Janja Garnbret', 22)
// janja.greet()


// 

// HELPER 

// const App = () => {
//       const name = 'Peter'
//       const age = 10
    
//       return (
//         <div>
//           <h1>Greetings</h1>
//           <Hello name="Maya" age={26 + 10} />
//           <Hello name={name} age={age} />
//         </div>
//       )
//     }
  
    

// const Hello = (props) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }
// export default App

// PROPS



// let props = {
//   name: 'ryan',
//   age: 25
// }

// const App = () => {
//         const name = 'Peter'
//         const age = 10
      
//         return (
//           <div>
//             <h1>Greetings</h1>
//             <Hello name="Maya" age={26 + 10} />
//             <Hello name={name} age={age} />
//           </div>
//         )
//       }


// const Hello = (props) => {
//   const name = props.name
//   const age = props.age

//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }


// DESTRUCTURING

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello1 name="Maya" age={26 + 10} />
//       <Hello2 name={name} age={age} />
//     </div>
//   )
// }


// const Hello2 = (props) => {
//   // destruct
//   const { name, age } = props
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }
// // or 

// const Hello1 = ({ name, age }) => {
//   // further destructured. Takes in an object of shape name an age
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }
// // COUNTER
// let counter = 1

// const refresh = () => {
//   ReactDOM.render(<App counter={counter} />, 
//   document.getElementById('root'))
// }

// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)

// const counter = (number) => {
  
// }
// export default App



// COUNTER

// const App = (props) => {
//   const {counter} = props
//   return (
//     <div>{counter}</div>
//   )
// }

// export default App


// PROPER WAY TO SET UP COUNTER

/* const App = () => {

  //deconstruction syntax assigns an array that contains two items to two variables, counter is a number and setCounter is a function
  const [ counter, setCounter ] = useState(0)

  // calls setCounter every second and adds 1 to counter 
  // Every time the setCounter modifies the state it causes the component to re-render. 
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  // displays the counter, use state is updating its value live on screen every second
  return (
    <div>{counter}</div>
  )
}
// this allows for no refresh of the page, just its state
export default App */




// Counter properly implemented
// COUNTER

import Counter from './components/Counter'
const App = () => {
  return(
    <Counter />
  )
}
export default App
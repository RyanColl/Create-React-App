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

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello1 name="Maya" age={26 + 10} />
      <Hello2 name={name} age={age} />
    </div>
  )
}


const Hello2 = (props) => {
  // destruct
  const { name, age } = props
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
// or 

const Hello1 = ({ name, age }) => {
  // further destructured. Takes in an object of shape name an age
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
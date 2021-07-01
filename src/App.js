// import React from 'react'
import React from 'react'
import ClickHandler from './components/ClickHandler'
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

/* import Counter from './components/Counter'
const App = () => {
  return(
    <Counter />
  )
}
export default App */


// PRESS BUTTON CHANGE
/* const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
    setCounter(counter +1)
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus
      </button>
    </div>
  )
}
export default App */


//-------- PREFERRED BUTTON APP LAYOUT ------------




/* import Buttons from './components/Buttons'
const App = () => {
  return(
    <Buttons />
  )
}
export default App */

//--------------------------------------------


// complex ---------------------------------------------

/* const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
} */
// OR
/* const App = () => {

  // sets react's use-state counter to an object with left and right keys, and allows the setClicks function to take in an object that updates the counter object
  // clicks is a good name
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  // handles by returning the same value for the right key, but a +1 value to the left key
  /* const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  } */

  // CREATES AN OBJECT THAT IS THE SAME AS CLICKS BUT ADDS THE INDICATED VALUE TO ONE OF THE KEYS
  /*
  const handleLeftClick = () =>
  setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () =>
  setClicks({ ...clicks, right: clicks.right + 1 })


  // handles by returning the same value for the left key, but a +1 value to the right key
  /* const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1  
    }
    setClicks(newClicks)
  } */
/*
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}
export default App
 */


/* const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    // setAll takes in a new copy of the array
    // do not try to push to a component state, nor assign something directly to it. Always give the useState function a new copy of the object or array for proper updating
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    // setAll takes in a new copy of the array
    // do not try to push to a component state, nor assign something directly to it. Always give the useState function a new copy of the object or array for proper updating
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}
export default App */



/* const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}



const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App */

const App = () => {
  return(
    <ClickHandler />
  )
}

export default App
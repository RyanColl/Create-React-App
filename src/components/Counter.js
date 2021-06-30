import React, { useState } from 'react'
// OLD COUNTER
// const counter = () => {
//   let counter = 1

//   const refresh = () => {
//     ReactDOM.render(<App counter={counter} />, 
//     document.getElementById('root'))
//   }

//   setInterval(() => {
//     refresh()
//     counter += 1
//   }, 1000)
// }
// export default counter


const Counter = () => {

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
export default Counter

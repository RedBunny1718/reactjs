import { useState } from 'react';

import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter>=0 && counter <20){
    setCounter(counter + 1)}
    else{
      console.log("You have reached the max of counter value",counter);
      
    }
  }

  const removeValue = () => {
    if(counter>0 ){
    setCounter(counter - 1)}
    else{
      console.log("You cant do it now bcz the value of set counter is reached min",counter);
      
    }

  }


  return (

    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button
        onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App

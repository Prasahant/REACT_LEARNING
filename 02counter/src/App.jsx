import { useState } from 'react'

import './App.css'

function App() {

//  let counter = 5
  let [counter, setCounter] = useState(10)
  const addValue=()=>{
    //console.log("value added", Math.random());
    console.log("clicked",counter)
    if(counter<20){
      counter+=1;
    }else{
      alert("out of limit")
    }
    setCounter(counter)
  }
  const minusVal = ()=>{
    console.log("clicked",counter)
    if(counter>0){
      counter-=1;
    }else{
      alert("out of limit")
    }
    setCounter(counter)
  }
  return (
    <>
      <h1>Chai Aur Code</h1>
      <h2>Counter Values: {counter}</h2>
      <span><button onClick={addValue}>Add value</button></span>
      <br/>
      <span><button onClick={minusVal}>Remove value</button></span>   

    </>
  )
}

export default App

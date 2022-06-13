import { useState } from 'react';

const Counter = ({initialValue, step}) => {
    const [counter, setCounter] = useState(initialValue)
    const increment = () =>{
        setCounter(counter + step);
    }
    const decrement = ()=>{
        setCounter(counter - step);
    }
    const reset = () =>{
        setCounter(initialValue);
    }
  
  return (
    <div>
        <span>{counter}</span>
        <br />
    <button onClick = {increment}>Incrementa</button>
    <button onClick = {decrement}>Reduce</button>
    <button onClick = {reset}>Resetea</button>
    </div>
  )
}

export default Counter
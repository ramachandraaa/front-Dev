import {useState} from 'react'
import './Counter.css'
export default function Counter({by}) {
  
  const [count,setCount]=useState(0);
  function increament() {
    setCount(count +by)
    console.log(count);
  }
  function decrement() {
    setCount(count -by)
    console.log(count);
  }
  function reset() {
    setCount(0)
    console.log(count);
  }
  return (
    <div className="Counter">
      <span className="count">{count}</span>
      <div>
        {" "}
        <button
          className="CounterButton"
          onClick={increament}
        >
          +{by}
        </button>
        {" "}
        <button
          className="CounterButton"
          onClick={decrement}
        >
          -{by}
        </button>
        <button
          className="CounterButton"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      
    </div>
  );
}

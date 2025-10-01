  import { useState } from "react";
  const Counter = () => {
    const [count, setCount] = useState(0);
    // let [dummy, setDummy] = useState(0);
    return( 
        <div>
        Counter: {count}
        <br />
        {/* Dummy: {dummy} */}
        {/* <button onClick={() => setDummy(dummy - 1)}>Decrement</button> */}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    )
  }
  export default Counter;
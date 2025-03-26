import React, { useState } from "react";

function Hello() {
  // Step 2: Declare state using useState
  const [count, setCount] = useState(0);
  const [msg , setMsg]=useState("Hello!!");
  // Step 3: Create functions to handle increment and decrement
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = ()=>setCount(0);

  const handleClick =()=>setMsg("yeyy you clicked the button!!");

  const showAlert=(name)=> alert(`Hello ${name}`);

  return (
    <div >
      <h1>Counter: {count}</h1>
      <button onClick={()=>increment()} style={{ marginRight: "10px" }}>+</button>

      <button onClick={()=>{decrement() ; alert("decremented");}}>-</button>

      <button onClick={reset}>reset</button>
      <hr/>
      <h1>{msg}</h1>
      <button onClick={handleClick}>click me</button>
      <hr/>
      <button onClick={()=>showAlert("Archith")}>Alert Button</button>
    </div>
  );
}

export default Hello;

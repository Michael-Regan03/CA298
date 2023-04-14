import { useState } from "react";

function Counter() {
  const [myVar, setMyVar] = useState(0);

  return (
    <div>
      <p>{myVar}</p>
      <button onClick={() => setMyVar(myVar + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
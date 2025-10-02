import Clock from "./clock";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div>
      <h3>Digital Clock</h3>
      <select value={color} onChange={e => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option> 
       </select> 
      <Clock color={color} />
    </div>
  );
}
export default App;
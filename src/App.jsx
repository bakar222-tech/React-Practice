import React, { useState } from "react";
function App() {
  const[gender, setGender] = useState("");
  const[City, setCity] = useState("");

    return (
      <div style={{
        maxWidth: 500,
        margin: '40px auto',
        padding: 32,
        border: '1px solid #dbeafe',
        borderRadius: 16,
        background: 'linear-gradient(135deg, #e3eafc 0%, #fafcff 100%)',
        boxShadow: '0 4px 16px rgba(25, 118, 210, 0.08)'
      }}>
        <h4 style={{ textAlign: 'center', color: '#1976d2', marginBottom: 28, letterSpacing: 1 }}>Selected Gender: {gender}</h4>
        <h3 style={{ textAlign: 'center' }}>Select Gender</h3>
        <input onChange={(e) => setGender(e.target.value)} type="radio" name="Gender" id="male" value="male" checked={gender === "male"} /> 
        <label htmlFor="male"> Male</label>
        <input onChange={(e) => setGender(e.target.value)} type="radio" name ="Gender" id ="female" value="female" checked={gender === "female"} /> 
        <label htmlFor="female"> Female</label>
        <br />
        <h4 style={{ textAlign: 'center' }}>Select City</h4>
        <select defaultValue={null} onChange={(e) => setCity(e.target.value)}>
          <option value="krk" id="krk">Krk</option>
          <option value="zagreb" id="zagreb">Zagreb</option>
          <option value="split" id="split">Split</option>
        </select>
        <h4 style={{ textAlign: 'center' }}>Selected City: {City}</h4>
      </div>
  );


  
}
export default App;
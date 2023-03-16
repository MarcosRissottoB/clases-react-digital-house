import React, { useState } from 'react'
import './App.css';
// import { Items } from './componentes/cicloDeVidaDeLosComponentes';
import { User } from './componentes/peticionesAsicronas';

function App() {
  const [id, setId] = useState(1);

  const handleClick = () => {
    console.log("setId", id);
    setId(id + 1)
  }
  return (
    <div className="App">
      <h1>Peticiones asincronas</h1>
      <div className="App-container">
      {/* userId */}
        <User userId={id}/>
        <button onClick={() => handleClick()}>Cambiar ID</button>
      </div>
    </div>
  );
}

export default App;






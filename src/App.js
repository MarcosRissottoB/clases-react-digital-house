import React, { useState } from 'react'
import './App.css';
// import { Items } from './componentes/cicloDeVidaDeLosComponentes';
// import { User } from './componentes/peticionesAsicronas';
import { Crud } from './componentes/crud';

function App() {
  // const [id, setId] = useState(1);

  // const handleClick = () => {
  //   console.log("setId", id);
  //   setId(id + 1)
  // }

  return (
    <div className="App">
      <h1>Peticiones asincronas</h1>
      <div className="App-container">
        {/* <User userId={id}/>
        <button onClick={() => handleClick()}>Cambiar ID</button> */}
        <Crud />
      </div>
    </div>
  );
}

export default App;






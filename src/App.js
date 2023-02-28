import './App.css';
import * as React from 'react';
import { Card } from './componentes/card'
import { CardFC } from './componentes/cardFC'
function App() {

  return (
    <div className="App">
      <h1>Hooks</h1>
      <div className="App-container">
        <Card />
        <CardFC />
      </div>
    </div>
  );
}

export default App;






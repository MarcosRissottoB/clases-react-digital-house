import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';

// export default function MyApp() {
//   return (
//     <div>
//       <Button variant="contained">Hello World</Button>
//     </div>
//   );
// }
// const {nombre, edad, apellido} = persona;

const Encabezado = ({titulo, subtitulo}) => {
  <>
    <h1>{titulo}</h1>
    <h2>{subtitulo}</h2>
  </>
}

// const ButtonCustom = (props.text) => {
//   <button>
//     {props.text}
//   </button>
// }

const ButtonCustom = ({text}) => {
  <button>
    {text}
  </button>
}

const ButtonCustomConChildren = ({children}) => {
  <button>
    {children}
  </button>
}
// props = {}
// text

// const ButtonMUI = ({variant}) => <Button variant={variant}>Text</Button>
function App() {
  const estadoWeb = {
    text:"nuestro super button",
    textChildren:"nuestro super button"
  }
  return (
    <div className="App">

      <ButtonCustom text={estadoWeb.text} />

      <ButtonCustomConChildren>
        {estadoWeb.textChildren}
      </ButtonCustomConChildren>

      {/* <Encabezado titulo="Hola chicos" subtitulo="Practicaron el fin de semana?"/>
      

      <ButtonMUI variant="contained">Hello World</ButtonMUI>
      <ButtonMUI variant="contained">Text</ButtonMUI>

      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
    </div>
  );
}

export default App;

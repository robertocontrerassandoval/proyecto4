import Formulario from './assets/componentes/Formulario.jsx'
import './App.css'
import Listado from './assets/componentes/Listado.jsx'
import Buscador from './assets/componentes/Buscador.jsx'
import { useState } from 'react';


function App() {

  // const [datosUsuarioNuevos, setDatosUsuarioNuevos] = useState(BaseColaboradores)


  return (
    <>
     <Buscador />
     <Formulario />
     <Listado />
    </>
  )
}

export default App


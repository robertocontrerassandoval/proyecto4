import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table } from 'react-bootstrap';
import {BaseColaboradores} from '../js/BaseColaboradores.js';

const Formulario = () => {
  const [idColaborador, setIdColaborador] = useState("")
  const [nombreColaborador, setNombreColaborador] = useState("")
  const [correoColaborador, setCorreoColaborador] = useState("")
  const [edadColaborador, setEdadColaborador] = useState("")
  const [cargoColaborador, setCargoColaborador] = useState("")
  const [telefonoColaborador, setTelefonoColaborador] = useState("")
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)

   // Función al enviar el formulario
const enviarFormulario = (e) => { 
  e.preventDefault() 
  // if(!idColaborador || !edadColaborador || !cargoColaborador || !telefonoColaborador)
  // enviarAlerta("todos los campos son obligatorios")
  // Agregamos la  tarea
  setListaColaboradores([...listaColaboradores, 
    {id: idColaborador,
    nombre: nombreColaborador,
    correo: correoColaborador, 
    edad: edadColaborador,
    cargo: cargoColaborador,
    telefono: telefonoColaborador}
  ]) 
  
  // Vaciamos el formulario
  setIdColaborador, setNombreColaborador, setCorreoColaborador, setCargoColaborador, setTelefonoColaborador ("")  

      }

  //Función al escribir sobre el input del formulario
const capturaInput1 = (e) => { 
  setIdColaborador(e.target.value)
}

const capturaInput2 = (e) => { 
  setNombreColaborador(e.target.value)
}

const capturaInput3 = (e) => { 
  setCorreoColaborador(e.target.value)
}

const capturaInput4 = (e) => { 
  setEdadColaborador(e.target.value)
}

const capturaInput5 = (e) => { 
  setCargoColaborador(e.target.value)
}

const capturaInput6 = (e) => { 
  setTelefonoColaborador(e.target.value)
}

return ( 
<>
<div className='principalFormulario'>


  <div className='formulario'>

  <Form onSubmit={enviarFormulario}>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Control 
        name='idColaborador'
        type="text" 
        placeholder="Id colaborador"
        onChange={capturaInput1} 
        value={idColaborador} //viene de const idColaborador
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Control 
        name='nombreColaborador'
        type="text" 
        placeholder="Nombre colaborador"
        onChange={capturaInput2} 
        value={nombreColaborador} //viene de const nombreColaborador
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCorreo">
        <Form.Control 
        name='nombreColaborador'
        type="email" 
        placeholder="Correo colaborador"
        onChange={capturaInput3} 
        value={correoColaborador} //viene de const correoColaborador
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEdad">
        <Form.Control 
        name='nombreColaborador'
        type="number" 
        placeholder="Edad colaborador"
        onChange={capturaInput4} 
        value={edadColaborador} //viene de const edadColaborador
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCargo">
        <Form.Control 
        name='nombreColaborador'
        type="text" 
        placeholder="Cargo colaborador"
        onChange={capturaInput5} 
        value={cargoColaborador} //viene de const cargoColaborador
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTelefono">
        <Form.Control 
        name='nombreColaborador'
        type="text" 
        placeholder="Telefono colaborador"
        onChange={capturaInput6} 
        value={telefonoColaborador} //viene de const telefonoColaborador
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar colaborador
      </Button>
    </Form>



  </div>



   <div>

   <Table  striped bordered hover size="sm">
<thead>
  <tr>
    <th scope='col'>Id</th>
    <th scope='col'>Nombre</th>
    <th scope='col'>Correo</th>
    <th scope='col'>Edad</th>
    <th scope='col'>Cargo</th>
    <th scope='col'>Telefono</th>
  </tr>

  
</thead>
<tbody>

  {listaColaboradores.map(tarea => {
    return (
      
      <tr>
          <td key={tarea.id}> {tarea.id} </td> 
          <td  key={tarea.nombre}> {tarea.nombre} </td>
          <td  key={tarea.correo}> {tarea.correo} </td>
          <td key={tarea.edad}> {tarea.edad} </td>
          <td key={tarea.cargo}> {tarea.cargo} </td>
          <td key={tarea.telefono}> {tarea.telefono} </td>
      </tr>
    )})}  

</tbody>
</Table>

   </div> 

</div>
</> )}

export default Formulario;


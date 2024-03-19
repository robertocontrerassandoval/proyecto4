import React, { useState } from 'react';
import {Button, Form, Table} from 'react-bootstrap';
import { BaseColaboradores } from '../js/BaseColaboradores.js';

const Buscador = () => {
  const [buscarColaborador, setBuscarColaborador] = useState("")
  const [Colaboradores, setColaboradores] = useState (BaseColaboradores)
    
  const buscarTarea = (tarea) => {
    const listaFiltrada = Colaboradores.filter((el) =>{
      {el.nombre || el.id || el.correo || el.cargo}
    console.log()

    } 
      )
          setColaboradores(listaFiltrada)
    }

    const buscarInput = (e) => { 
      setBuscarColaborador(e.target.value)
    }
    

    return (
      <div>
                <div className='buscador'>
           


           <Form onSubmit={buscarInput} >
             <Form.Group className="mb-3" controlId="formBasicBuscar">
               <Form.Control 
               size="m"
               name='buscarColaborador'
               type="text" 
               placeholder="Buscar"
               onChange={buscarInput}
               value={buscarColaborador} />
              
             </Form.Group>
       
           
             <Button onClick={() => buscarTarea(tarea)} variant="primary" type="submit">
               Buscar
             </Button>
           </Form>
         
       
       
               </div>
       
       {/* <div>
       
       <Table  striped >
       
       <tbody>
       
       {Colaboradores.map(tarea => {
        return (
          
          <tr>
              
              <td ></td>
              
          </tr>
        )})}  
       
       </tbody>
       </Table>
       
       </div> */}
       

      </div>
    );
}

export default Buscador;

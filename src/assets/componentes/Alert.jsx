import React from 'react';
import {BaseColaboradores} from '../js/BaseColaboradores.js';


const Alert = (props) => {

    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)

    const {faltanDatos, datosCompletados } = props

    const datosError = () => {

        if(id == 0){
            alert("debe ingresar ID");
        } else if (nombre == ("")){
            alert("debe ingresar nombre");
        }
   }

   const datosCorrectos = () => {

    if(id != 0 | nombre != ("")){
        alert("ingreso exitoso");
    }
}
   



    return (
        <div>
            <h2>{faltanDatos}</h2>
            <h2>{datosCompletados}</h2>
            
        </div>
    );
}

export default Alert;

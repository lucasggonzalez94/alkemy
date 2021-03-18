import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const NewOperation = (props) => {

    const {operations, consult, setConsult} = props

    const [newOperation, setNewOperation] = useState({
        concepto: '',
        monto: '',
        fecha: '',
        tipo: ''
    })

    // Obtiene datos del formulario
    const updateState = e => {
        setNewOperation({
            ...newOperation,
            [e.target.name]: e.target.value
        })
    }

    // Guardar operacion en BD
    const submitOperation = e => {
        e.preventDefault()

        console.log(JSON.parse(JSON.stringify(newOperation)));
        
        const ajax = new XMLHttpRequest();
        
        ajax.onreadystatechange = function() {
            if (ajax.readyState === 4 && ajax.status === 200) {

                setConsult(true);
            }else {
                console.log('Hubo un error');
            }
        };

        ajax.open('POST', 'http://localhost:3050/addexpenses');
        ajax.setRequestHeader('Content-Type', 'application/json');
        ajax.send(JSON.stringify(newOperation));
    }

    return (
        <div className='contenedor'>
            <h3>Nueva Operacion</h3>

            <div className='contenedor-interno'>
                <form
                    onSubmit={submitOperation}
                >
                    <input type='text' placeholder='Concepto' name='concepto' value={newOperation.concepto} onChange={updateState}/>
                    <input type='number' placeholder='Monto' name='monto' value={newOperation.monto} onChange={updateState}/>
                    <input type='date' placeholder='Fecha' name='fecha' value={newOperation.fecha} onChange={updateState}/>
                    <select name='tipo' onChange={updateState}>
                        <option value='Ingreso'>Ingreso</option>
                        <option value='Egreso'>Egreso</option>
                    </select>
                    <input type='submit' value='Nueva Operación' className='btn'/>
                </form>
            </div>

            <Link to='/' className='btn'>Volver</Link>
        </div>
    );
}
 
export default NewOperation;
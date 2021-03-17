import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const ListOperations = () => {

    const [operations, setOperations] = useState({});
    const [consult, setConsult] = useState(true);

    useEffect(() => {

        const ajax = new XMLHttpRequest();
        
        ajax.onreadystatechange = function() {
            if (ajax.readyState === 4 && ajax.status === 200) {
                setOperations(JSON.parse(ajax.responseText));

                setConsult(false);
            } else {
                console.log('Hubo un error');
            }
        };

        ajax.open('GET', 'http://localhost:3050/expenses', true);
        ajax.send();

    }, [consult]);

    return (
        <Fragment>
        <div className="contenedor">
            <h1>Listado de Operaciones</h1>

            {operations.length > 0 ?
                operations.map(operation => (
                    <div className='operation'>
                        <h3>$ {operation.monto}</h3>

                        <p>{operation.fecha}</p>

                        <p>{operation.concepto} - <span>{operation.tipo}</span></p>

                        <div className='buttons'>
                            <button><i class="fas fa-edit"></i></button>
                            <button><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                )) :
                null
            }

            <div className='buttons'>
                <button className='button button-primary'>Ver Todas</button>
                <button className='button button-primary'>Filtrar</button>
            </div>
        </div>
        </Fragment>
    );
}
 
export default ListOperations;
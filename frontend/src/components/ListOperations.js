import React, {useState, useEffect} from 'react';

const ListOperations = (props) => {

    const [operationsList, setOperationsList] = useState([]);
    const [consult, setConsult] = useState(true);

    useEffect(() => {

        const ajax = new XMLHttpRequest();
        
        ajax.onreadystatechange = function() {
            if (ajax.readyState === 4 && ajax.status === 200) {
                setOperationsList(JSON.parse(ajax.responseText));

                setConsult(false);
            }
        };

        ajax.open('GET', 'http://localhost:3050/expenseslimit', true);
        ajax.send();

    }, [consult]);

    return (
        <div className="contenedor">
            <h2>Listado de Operaciones</h2>

            <div className='list'>
                {
                    operationsList.length > 0 ?
                    operationsList.map(operation => (
                        <div key={operation.id} className='operation'>
                            <h3>$ {operation.monto}</h3>

                            <div className='description'>
                                <p>{operation.fecha}</p>

                                <p>{operation.concepto} - <span>{operation.tipo}</span></p>
                            </div>

                            <div className='actions'>
                                <button className='btn btn-action edit'><i className="fas fa-edit"></i></button>
                                <button className='btn btn-action delete'><i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    )) :
                    <p>Ingrese su presupuesto inicial.</p>
                }

                <div className='buttons'>
                    <button className='btn' disabled={(operationsList.length <= 0 ? true : false)}>Ver Todas</button>
                </div>
            </div>
        </div>
    );
}
 
export default ListOperations;
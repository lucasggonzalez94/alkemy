import React, {useState, useEffect} from 'react';

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

        ajax.open('GET', 'http://localhost:3050/expenseslimit', true);
        ajax.send();

    }, [consult]);

    return (
        <div className="contenedor">
            <h2>Listado de Operaciones</h2>

            <div className='contenedor-interno'>
                {
                    operations.length > 0 ?
                    operations.map(operation => (
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
                    <p>Ingrese operaciones para empezar a ver su balance.</p>
                }

                <div className='buttons'>
                    <button className='btn' disabled={(operations.length <= 0 ? true : false)}>Ver Todas</button>
                </div>
            </div>
        </div>
    );
}
 
export default ListOperations;
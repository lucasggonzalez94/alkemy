import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Balance = (props) => {

    const {budget} = props;

    // useEffect(() => {

    //     const ajax = new XMLHttpRequest();
        
    //     ajax.onreadystatechange = function() {
    //         if (ajax.readyState === 4 && ajax.status === 200) {
    //             setOperations(JSON.parse(ajax.responseText));

    //             setConsult(false);
    //         }
    //     };

    //     ajax.open('GET', 'http://localhost:3050/expenses', true);
    //     ajax.send();

    //     let budgetTemp = 0;

    //     operations.map(operation => (
    //         (operation.tipo === 'Egreso' ? setBudget(budgetTemp - operation.monto) : setBudget(budgetTemp + operation.monto))
    //     ));

    // }, [consult]);

    return (
        <div className='contenedor'>
            <div className='contenedor-balance'>
                <h2>Balance</h2>

                <h3>Total: <span>${budget}</span></h3>

                <Link to='/new' className='btn-action add'><i className="fas fa-plus"></i></Link>
            </div>
        </div>
    );
}
 
export default Balance;
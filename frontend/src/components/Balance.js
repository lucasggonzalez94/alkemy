import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Balance = () => {

    const [budget, setBudget] = useState(0);

    return (
        <div className='contenedor'>
            <div className='contenedor-balance'>
                <h2>Balance</h2>

                <h3>Total: <span>$35000</span></h3>

                <Link to='/new' className='btn-action add'><i className="fas fa-plus"></i></Link>
            </div>
        </div>
    );
}
 
export default Balance;
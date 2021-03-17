import React, { useState } from 'react';

import Error from './Error';

const InitialBalance = ({setBudget}) => {

    const [initialBudget, setInitialBudget] = useState(0.0);
    const [error, setError] = useState(false);

    const defineBudget = e => {
        setInitialBudget(parseFloat(e.target.value));
    }

    const submitBudget = e => {
        e.preventDefault();

        if (initialBudget <= 0 || isNaN(initialBudget)) {
            setError(true);
            return;
        }

        setError(false);
        setBudget(initialBudget);
    }

    return (
        <div className='container'>
            <h2>Coloca tu presupuesto inicial</h2>

            {error ? <Error message='El presupuesto es incorrecto' /> : null}

            <form
                onSubmit={submitBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto inicial"
                    onChange={defineBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </div>
    );
}
 
export default InitialBalance;
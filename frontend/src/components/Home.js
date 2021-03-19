import React, {Fragment, useState, useEffect} from 'react';
import Balance from './Balance';
import ListOperations from './ListOperations';
import NewOperation from './NewOperation';

const Home = (props) => {

    const {budget, consult, setConsult} = props

    const [operations, setOperations] = useState([]);

    useEffect(() => {

        const ajax = new XMLHttpRequest();
        
        ajax.onreadystatechange = function() {
            if (ajax.readyState === 4 && ajax.status === 200) {
                setOperations(JSON.parse(ajax.responseText));

                setConsult(false);
            }
        };

        ajax.open('GET', 'http://localhost:3050/expenses', true);
        ajax.send();

    }, [consult, budget]);

    return (

        <Fragment>
            <ListOperations
                operations={operations}
                consult={consult}
                setOperations={setOperations}
                setConsult={setConsult}
            />
            <Balance
                operations={operations}
                consult={consult}
                budget={budget}
                setOperations={setOperations}
                setConsult={setConsult}
            />
        </Fragment>
    );
}
 
export default Home;
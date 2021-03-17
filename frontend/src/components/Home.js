import React, {Fragment, useState, useEffect} from 'react';
import Balance from './Balance';
import ListOperations from './ListOperations';

const Home = () => {

    const [remaining, setRemaining] = useState(0);
	const [spent, setSpent] = useState(0);
    

    return (
        <Fragment>
            <ListOperations/>
        </Fragment>
    );
}
 
export default Home;
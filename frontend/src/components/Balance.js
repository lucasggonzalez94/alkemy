import React, {Fragment, useState, useEffect} from 'react';

const Balance = ({budget}) => {

    const [remaining, setRemaining] = useState(0);
	const [spent, setSpent] = useState(0);
    const [operations, setOperations] = useState({});

    return (
        <Fragment>
            <h1>Balance</h1>
        </Fragment>
    );
}
 
export default Balance;
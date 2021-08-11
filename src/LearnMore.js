import React, { useEffect, useState } from 'react';

function LearnMore(props){
    const { explain } = props;
    const [ disabledButton, setDisabledButton] = useState(true);
    const [ enabledP, setEnabledP ] = useState(false);

    const clicky = () => {
        setDisabledButton(false);
        setEnabledP(true);
    }

    useEffect( clicky, []);

    return(
        <div>
            <button disabled={disabledButton} onClick={clicky}> Learn More </button>
            <p disabled={enabledP}> {explain} </p>
        </div>
    )
}

export default LearnMore;
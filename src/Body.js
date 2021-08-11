import React from 'react';
import LearnMore from './LearnMore.js';

function Body(props){
    const { apodData } = props;

    return(
        <div className='Body-container'>
            <img src={apodData.hdurl} alt='Pic of Day'></img>
            <h1>{apodData.title}</h1>
            <LearnMore explain={apodData.explanation} />
        </div>
    )
};

export default Body;
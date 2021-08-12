import React from 'react';
import LearnMore from './LearnMore.js';

function Body(props){
    const { apodData } = props;

    return(
        <div className='Body-container'>
            <h1> Astronomy Picture of the Day </h1>
            <img src={apodData.hdurl} alt='Pic of Day'></img>
            <h2>{apodData.title}</h2>
            <LearnMore explain={apodData.explanation} />
        </div>
    )
};

export default Body;
import React from 'react';

 function Header(props){
    const { date } = props;

    return(
        <div className='App-header'>
            <img src='' alt='Nasa Logo'></img>
            <p> {date} </p>
        </div>
    )
};

export default Header;
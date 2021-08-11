import React from 'react';

 function Header(props){
    const { date } = props;

    return(
        <div className='App-header'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1280px-NASA_Worm_logo.svg.png' alt='Nasa Logo'></img>
            <p> {date} </p>
        </div>
    )
};

export default Header;
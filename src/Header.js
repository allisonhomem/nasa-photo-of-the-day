import React from 'react';
import styled from 'styled-components';
import theme from './theme/index.js';

const StyledHeader = styled.div `
background-color: ${pr => pr.theme.darkColor};
min-height: 10vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 2%;
font-size: calc(10px + 2vmin);
color: ${pr => pr.theme.lightColor};
`;

const StyledLogo = styled.img `
height: 15%;
width:15%;
`;

 function Header(props){
    const { date } = props;

    return(
        <StyledHeader theme={theme}>
            <StyledLogo theme={theme} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1280px-NASA_Worm_logo.svg.png' alt='Nasa Logo'></StyledLogo>
            <p> {date} </p>
        </StyledHeader>
    )
};

export default Header;
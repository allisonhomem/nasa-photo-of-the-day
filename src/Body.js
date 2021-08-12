import React from 'react';
import LearnMore from './LearnMore.js';
import styled from 'styled-components';
import theme from './theme/index.js';

const StyledWebTitle = styled.h1 `
text-align: left;
text-transform: uppercase;
text-shadow: 1px 1px ${pr => pr.theme.redColor};
margin: 5% 0;
padding-left: 1%;
`;

const StyledPod = styled.img `
height: 
`;

function Body(props){
    const { apodData } = props;

    return(
        <div>
            <StyledWebTitle theme={theme}> Astronomy Picture of the Day </StyledWebTitle>
            <StyledPod theme={theme} src={apodData.hdurl} alt='Pic of Day'></StyledPod>
            <h2>{apodData.title}</h2>
            <LearnMore explain={apodData.explanation} />
        </div>
    )
};

export default Body;
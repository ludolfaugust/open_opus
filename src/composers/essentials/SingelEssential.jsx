import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgrey;
    width: fit-content;
    margin: 2rem auto;
    padding: 0.5rem;
`;

const Info = styled.div`
    background: grey;
    
    padding:0 0.5rem;
    margin: 0.5rem 0;
`;

const InfoItems = styled.h4`
    color: white;
`;

const ComposerImage = styled.div`
   display: flex;
   flex-direction: column;
   height: 500px;
   width: 500px;
    
    `;


function SingelEssential(props) {



  return (
    <div>
        <Link path to= "/">Back Home</Link>
        <Container>
            <Info>
                <InfoItems>{props.name} | {props.epoch} | {props.birth} - {props.death}</InfoItems>
            </Info>
            <ComposerImage>
                <img src={props.portraits} />
            </ComposerImage>
        </Container>
    
    </div>
  )
}

export default SingelEssential
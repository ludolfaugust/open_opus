import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const EssentialList = styled.ul`
display: flex;
gap: 1rem;
justify-content: center;
flex-wrap: wrap;
margin: 0;
padding: 0px;

`
;

const Container = styled.div`

min-width: min-content;
overflow-y: scroll;
-ms-overflow-style: none;
scrollbar-width: none !important;
background-color: blue;
padding: 0.5;
box-shadow: 5px 6px 10px #888888;
border-radius: 3px;

&::-webkit-scrollbar {
    display: none;
}

`;

const ListItem = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  min-height: 50px;
  color: white;
 



`
;

const Title = styled.h1 `
 font-size: 30px;
 display: flex;
 justify-content: center;
 padding: 20px;

`;
const ListContainer = styled.div`
display: flex;
max-width: 80%;
margin: auto;
`;

const ComposerImage = styled.div`

 display: flex;
  justify-content: center;

`;

function EssentialsCard({essentials, setEssentials }) {

    // const deleteHandler  = (id) => {

    //     setEssentials(essentials.filter((essential) => essential.id !== id));

    // }





  return (<>
           

            <Title>Famous Composers</Title>
            <ListContainer>
                    <EssentialList>
                        {essentials.map((essential)=>{ 
                        return (
                        <>
                            <Container key={essential.id}>
                                    <ListItem key={essential.id}> {essential.complete_name} </ListItem> 
                                    <Link path to={`/${essential.id}`}>                              
                                    <ComposerImage>
                                    <img src={essential.portrait} />
                                    </ComposerImage>
                                    </Link> 
                            </Container>
                            
                        </>
                    )})}
                </EssentialList>

            </ListContainer>

        </>

  )
}

export default EssentialsCard
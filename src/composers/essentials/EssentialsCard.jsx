import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {TrashIcon} from '@heroicons/react/24/solid'


const EssentialList = styled.ul`
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: auto;
    `;

const Container = styled.div`
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none !important;
    background-color: #1818d9;
    box-shadow: 5px 6px 10px #888888;
    border-radius: 3px;
    position: relative;

    &::-webkit-scrollbar {
        display: none;
    }
    `;

const ListItem = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
    padding-top: 0.2rem;
    `
    ;

const Name = styled.h4`

`;

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
    &:hover{
        scale:1.1;
    }
    `;


function EssentialsCard({essentials, setEssentials }) {

    const deleteHandler  = (id) => {
        setEssentials(essentials.filter((essential) => essential.id !== id));
    };





  return (<>
           

            <Title>Famous Composers</Title>
            <ListContainer>
                    <EssentialList>
                        {essentials.map((essential)=>{ 
                        return (
                        <>
                            <Container key={essential.id}>
                                    
                                    <ListItem key={essential.id}>                                         
                                        <Name>{essential.complete_name}</Name> 
                                        <TrashIcon className="trashicon" onClick={() =>deleteHandler(essential.id)} />
                                    </ListItem> 
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
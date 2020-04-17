// Write your Character component here
import React from 'react';
import styled from 'styled-components';

// Styled component
const CharacterCard = styled.div`
   width: 50%;

   .card-container{
        display: flex;
        flex-wrap: wrap;
    }
    img {
        width:50%;
        flex-grow: 1;
    }
`

function Character(character){

    return (

        <CharacterCard>
            <div className={'card-container'}>
                <img src={character.image}></img>
                <h2>{character.name}</h2>            
            </div>
        </CharacterCard>

    );

}

export default Character
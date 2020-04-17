// Write your Character component here
import React from 'react';
import styled from 'styled-components';

// Styled component
const CharacterCard = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    width: 10%;
   &img{
       width:10%;
       
       
   }
    

`




function Character(character){

    return (

        <CharacterCard>

            <img src={character.image}></img>
            <h2>{character.name}</h2>            

        </CharacterCard>

    );

}

export default Character
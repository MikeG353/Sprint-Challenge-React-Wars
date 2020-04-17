import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Character from './components/Character'

const App = () => {
  const [characterList, setCharacterList] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect( () => {
    axios.get(`https://rickandmortyapi.com/api/character`)
    .then(res => {

      
      
      if (!characterList)
      return <h3>accessing intergalactic multi-dimentional database...</h3>;
      return(
        setCharacterList(res.data.results)
      )
    })
    .catch(err => {

      console.log(err)

    })
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      {
        characterList.map(character => {
          return <Character character={character} key={character.id} name={character.name} />
        })
        
      }
    </div>
  );
}

export default App;

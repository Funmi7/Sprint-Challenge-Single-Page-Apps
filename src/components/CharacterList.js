import React, { useEffect, useState } from "react";
import axios from 'axios';
// import {Link} from 'react-router-dom';
import CharacterCard from './CharacterCard';

const charactersAPI = 'https://rickandmortyapi.com/api/character/'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const getCharacters = () => {
      axios
      .get(charactersAPI)
      .then(response => {
        setCharacters(response.data.results)
        console.log(response.data)
      })
      .catch(error => {
        console.log('Error', error)
      })
    }
    getCharacters();
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => (
        <CharacterCard 
        image={character.image}
        name={character.name}
        species={character.species}
        gender={character.gender}
        />
      ))}
    </section>
  );
}

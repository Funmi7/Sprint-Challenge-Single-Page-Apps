import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';


const charactersAPI = 'https://rickandmortyapi.com/api/character/'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

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

  const search = searchValue => {
    axios
    .get(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
    .then(response => {
      if(response === 'True') {
        setCharacters(response.data.results)
      }else {
        setErrorMessage(response.data.Error);
      }
    })
    .catch(error => {
      console.log('Error', error)
    })
   
  }

  return (
    <section className="character-list">
      <SearchForm search={search} />

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

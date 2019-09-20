import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';


const charactersAPI = 'https://rickandmortyapi.com/api/character/'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // const [errorMessage, setErrorMessage] = useState(null);

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

  const onSearch = e => {
    setSearchTerm(e.target.value)

    let filteredCharacters = [];

    filteredCharacters = characters.filter(character => {
      return character.name.includes(e.target.value)
    })

    setFilteredCharacters(filteredCharacters)
  }

  let charactersToShow = characters;

  if(searchTerm) {
    charactersToShow = filteredCharacters;
  }

  return (
    <section className="character-list">
      <SearchForm onSearch={onSearch} searchTerm={searchTerm}/>
      {
        charactersToShow.map(newCharacter => {
          return (
            <CharacterCard character={newCharacter}/>
          )
        })
      })
    </section>
  );
}

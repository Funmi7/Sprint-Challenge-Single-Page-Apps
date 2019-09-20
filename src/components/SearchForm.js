import React, { useState, useEffect } from "react";
// import Axios from "axios";



export default function SearchForm(props) {

const [searchValue, setSearchValue] = useState('');

const handleSearchInputChanges = (e) => {
  setSearchValue(e.target.value);
}

const resetInputField = () => {
  setSearchValue('')
}

const callSearchFunction = (e) => {
  e.preventDefault();
  props.search(searchValue);
  resetInputField();
}
  return (

    <section className="search-form">
     Add a search form here
     <form>
        <input
            value={searchValue}
            onChange={handleSearchInputChanges}
            id='searchInput'
            type='text'
        />
        {/* <button onclick={onsubmit}>Submit</button> */}
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
     </form>
    </section>
  );
}

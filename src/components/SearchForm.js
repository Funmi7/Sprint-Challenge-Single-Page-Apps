import React, { useState, useEffect } from "react";
// import Axios from "axios";

const [searchValue, setSearchValue] = useState('');

const handleSearchInputChanges = (e) => {
  setSearchValue(e.target.value);
}

const resetInputField = () => {
  setSearchValue('')
}

export default function SearchForm(e) {
  e.preventDefault();
  props.search(searchValue);
  resetInputField;
  return (

    <section className="search-form">
     // Add a search form here
     <form>
        <input
            value={search}
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

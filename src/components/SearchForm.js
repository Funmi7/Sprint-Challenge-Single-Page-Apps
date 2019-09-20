import React, { useState, useEffect } from "react";
// import Axios from "axios";



export default function SearchForm(props) {

const  {onSearch, searchTerm} = props;

// const [searchValue, setSearchValue] = useState('');

// const handleSearchInputChanges = (e) => {
//   setSearchValue(e.target.value);
// }

// const resetInputField = () => {
//   setSearchValue('')
// }

// const callSearchFunction = (e) => {
//   e.preventDefault();
//   props.search(searchValue);
//   resetInputField();
// }
  return (
    <section className="search-form">
      <label htmlFor='nameInput'>Name</label>
        <input onChange={onSearch} value={searchTerm} input id='searchInput' type='text'/>
    </section>
  );
}

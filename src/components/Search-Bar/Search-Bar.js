import React, { useState } from "react";
import { FormInput, Button } from "../../components/";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event)=> {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    setSearchText(value);
  }

  const onSubmit = ()=> {
    console.log(searchText);
    setSearchText("");
  }
  return (
    <div className="search-bar">
        <h1 className="search-bar__title">Find your movie</h1>
        <div className="search-bar__search-container">
          <div className="search-bar__form-input">
            <FormInput value={searchText} onChange={handleChange} placeholder="What do you want to watch?"></FormInput>
          </div>
          <div className="search-bar__search-button">
            <Button onClick={onSubmit} title="Search" color="red" size="big" />
          </div>
        </div>
    </div>

  )
}
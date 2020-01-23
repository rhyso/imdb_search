import React, { Fragment, useState } from "react";

const Search = ({ search }) => {
 
    const [searchValue, setSearchValue ] = useState('')

    const callSearch = event => {

            event.preventDefault();
            search(searchValue)
    }
 

    return (
        <Fragment>
            <h1>search</h1>
            <form className="search">
            
            
            <input 
                placeholder="search placeholder"
                type="text"
                value={searchValue}
                onChange={ (event) => setSearchValue(event.target.value)}
                />
            <input type="submit" value="Search" disabled={!searchValue} onClick ={callSearch}/>
            </form>
        </Fragment>
    )
};

export default Search;


import React from 'react';


const SearchBar = ({ input, setInput, placeHolder }) => {


    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="hidden">{placeHolder}</span>
            </label>
            <input className="barStyle"
                type="text"
                id="header-search"
                placeholder={placeHolder}
                name="s"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

        </form>
    );
}



export default SearchBar;
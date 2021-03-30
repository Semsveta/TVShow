import React from 'react';
import { useHistory } from 'react-router-dom';


const SearchBar = ({ input, setInput, placeHolder }) => {
    const history = useHistory();
    const onSubmit = e => {
        history.push(`?s=${input}`)
        e.preventDefault()
    };

    return (
        <form action="/" method="get" onSubmit={onSubmit} autoComplete="off">
            <label htmlFor="search">
                <span className="hidden">{placeHolder}</span>
            </label>
            <input className="barStyle"
                type="text"
                id="search"
                placeholder={placeHolder}
                name="s"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

        </form>
    );
}



export default SearchBar;
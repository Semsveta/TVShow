import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ShowList from './ShowList';

const MovieShowSearch = (props) => {
    const [inputGenreState, setInputGenreState] = useState('');
    const [inputTitleState, setInputTitleState] = useState('');
    const [listState, setListState] = useState();
    const [listDefault, setListDefault] = useState();
    const [listAfterFiltering, setListAfterFiltering] = useState();
    const [stateChanges, setStateChange] = useState(false);


    const getListOfMovies = async () => {
        return await fetch('https://api.tvmaze.com/shows')
            .then(response => response.json())
            .then(data => {
                setListState(data)
                setListDefault(data)
            });
    }

    const doesMovieMatchQuery = (show, query) => {
        const genres = show.genres;
        const matches = genres.filter(genre => {
            return genre.toLowerCase().includes(query.toLowerCase());
        });

        if (matches.length > 0) {
            return true;
        } else {
            return false;
        }
    };

    const filterShowsByGenre = async (input) => {
        const filteredByGenre = listDefault.filter(entry => {
            return doesMovieMatchQuery(entry, input);
        });
        setInputGenreState(input);
        setListState(filteredByGenre);
        setListAfterFiltering(filteredByGenre);
        setStateChange(true);
    }

    const filterShowsByTitle = async (input) => {
        console.log("items before filtering by title:" + listState.count);
        const filteredByTitle = listAfterFiltering.filter(entry => {
            if (entry.name.toLowerCase().includes(input.toLowerCase())) {
                console.log("Found a match by title");
                return true;
            } else {
                console.log("not matching");
                return false;
            }
        });

        setInputTitleState(input);
        setListState(filteredByTitle);
    }

    useEffect(() => { getListOfMovies() }, []);

    return (
        <>
            <h1>Find a TV Show</h1>
            <SearchBar
                input={inputGenreState}
                placeHolder={"Search genres, f.e. drama, fiction, science"}
                setInput={filterShowsByGenre}
            />

            {stateChanges ? <SearchBar
                input={inputTitleState}
                placeHolder={"Search title"}
                setInput={filterShowsByTitle}
            /> : null}


            <ShowList showList={listState} />
        </>

    )

}

export default MovieShowSearch;
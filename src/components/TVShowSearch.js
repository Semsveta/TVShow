import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ShowList from './ShowList';
import { connect } from 'react-redux';
import { initialListFromAPI } from './../store/actions'


const TVShowSearch = (props) => {
    const { listDefault, getListofShows } = props
    const [inputGenre, setInputGenre] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [list, setList] = useState(listDefault);
    const [listAfterFiltering, setListAfterFiltering] = useState();
    const [stateChanges, setStateChange] = useState(false);

    useEffect(() => {
        setList(props.listDefault);
    }, [props.listDefault]);


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
        const filteredByGenre = props.listDefault.filter(entry => {
            return doesMovieMatchQuery(entry, input);
        });
        setInputGenre(input);
        setList(filteredByGenre);
        setListAfterFiltering(filteredByGenre);
        setStateChange(true);
        console.log("list state:" + list)
    }

    const filterShowsByTitle = async (input) => {
        console.log("items before filtering by title:" + list.count);
        const filteredByTitle = listAfterFiltering.filter(entry => {
            if (entry.name.toLowerCase().includes(input.toLowerCase())) {
                console.log("Found a match by title");
                return true;
            } else {
                console.log("not matching");
                return false;
            }
        });
        setInputTitle(input);
        setList(filteredByTitle);

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { getListofShows() }, []);

    return (
        <>
            <h1>Find a TV Show</h1>
            <SearchBar
                input={inputGenre}
                placeHolder={"Search genres, f.e. drama, fiction, science"}
                setInput={filterShowsByGenre}
            />

            {stateChanges ? <SearchBar
                input={inputTitle}
                placeHolder={"Search title"}
                setInput={filterShowsByTitle}
            /> : null}


            <ShowList showList={list} />
        </>

    )
}

const mapStateToProps = state => {
    return {
        listDefault: state.listDefault,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListofShows: () => dispatch(initialListFromAPI())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TVShowSearch);
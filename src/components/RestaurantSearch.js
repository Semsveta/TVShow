import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import RestaurantList from './RestaurantList';

const SearchResults = (props) => {
    const [inputState, setInputState] = useState('');
    const [ListState, setListState] = useState();
    let setListStateDefault = [];

    const getListOfRestaurants = async () => {

        return await fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => {
                setListState(data)
                setListStateDefault = [...setListState(data)]
            });
    }

    const updateInput = async (input) => {
        const filtered = setListStateDefault.filter(country => {
            return country.name.toLowerCase.includes(input.toLowerCase)
        });
        setInputState(input);
        setListState(filtered);
    }

    useEffect(() => { getListOfRestaurants() });

    return (
        <>
            <h1>Country List</h1>
            <SearchBar
                input={inputState}
                setKeyword={updateInput}
            />
            <RestaurantList restaurantList={ListState} />
        </>

    )

}

export default SearchResults;
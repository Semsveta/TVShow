import React, { useState, useEffect } from 'react';
import SearchBar from './../components/SearchBar';
import RestaurantList from './../components/RestaurantList';

const RestaurantSearch = (props) => {
    const [inputState, setInputState] = useState('');
    const [ListState, setListState] = useState();
    const [ListDefault, setListDefault] = useState();


    const getListOfRestaurants = async () => {

        return await fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => {
                setListState(data)
                setListDefault(data)

            });
    }

    const updateInput = async (input) => {
        const filtered = ListDefault.filter(country => {
            return country.name.toLowerCase().country.name.toLowerCase().includes(input.toLowerCase())
        });
        setInputState(input);
        setListState(filtered);
    }

    useEffect(() => { getListOfRestaurants() });

    return (
        <>
            <h1>Restaurants</h1>
            <SearchBar
                input={inputState}
                setKeyword={updateInput}
            />
            <RestaurantList restaurantList={ListState} />
        </>

    )

}

export default RestaurantSearch;
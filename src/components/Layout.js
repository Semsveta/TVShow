import React from 'react';
import SearchBar from './SearchBar';

const layout = (props) => (
    <div>
        <p>
            Feel hungree? Find a restaurant!
        </p>
        <SearchBar

        />
        <main>{props.children}</main>
    </div>
);

export default layout;
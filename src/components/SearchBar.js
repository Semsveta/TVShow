import React from 'react';
import './SearchBarStyle.css';

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
    const BarStyling = {
        width: "20rem",
        background: "#F2F1F9",
        border: "none",
        padding: "0.5rem"
    };
    // const ButtonStyling = {
    //     width: "10rem",
    //     background: "#F2F1F9",
    //     marginLeft: "30px",
    //     border: "none",
    //     padding: "0.5rem"
    // };

    return (
        <div className="SearchContainer" >
            <input
                style={BarStyling}
                key="random1"
                value={keyword}
                placeholder={"type city"}
                onChange={(e) => setKeyword(e.target.value)}
            />
            {/* <button>
                style={ButtonStyling}
                onClick= {"Search Now"}
            </button> */}
        </div>

    );
}

export default SearchBar;
import React from "react";
import { useState } from "react";

const Search = (props) => {
    const [val, valFunk] = useState("");
    return (
        <form>
            <input
                onChange={(event) => {
                    valFunk(event.target.value);
                }}
                value={val}
                type="text"
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    props.strokeFunction(val);
                }}
            >
                Поиск
            </button>
        </form>
    );
};

export default Search;

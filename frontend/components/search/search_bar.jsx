import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return(
            <form className="search-bar-form" onSubmit={handleSubmit}>
                <input id="search-bar" type="search" value={} onChange={}>
                </input>
            </form>
        )
    }
    
}

export default SearchBar
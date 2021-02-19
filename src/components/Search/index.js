import React from 'react';
import "./style.css"


function Search(props) {
    return (
        <form>
            <div class="form-group" style={{ display: 'flex' }}>
                <label htmlFor="search"></label>
                
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search Subjects"
                    id="searchbar"
                />
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Search the "Royal" Subjects!
                </button>
                <button onClick={props.resetPage} className="btn btn-primary">
                    I Need New Subjects!
                </button>
            </div>
        </form>
    );
}

export default Search
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function Search(){
    const [State, setState]= useState('');
    const history = useHistory();

    const  handleOnChange = event => {
        setState(event.target.value);
    }

    function navToPage() {
      history.push({
        pathname: "/searchResults",
        state: {State: State}
      });
    }

    return (
    <div>
        <div className="search">
            <div className="input">
                <input 
                    type="text" 
                    placeholder="Search...." 
                    // value={State.SearchValue} 
                    id="myInput" 
                    onChange={handleOnChange}
                />
            </div>
            {/* <Link data-testid="btn" to="/searchResults" > */}
                <button onClick={()=> navToPage()}><img className="icons" src="./icons/search.png" alt="search" /></button >
            {/* </Link> */}
        </div>
    </div>
    );
}    

export default Search;


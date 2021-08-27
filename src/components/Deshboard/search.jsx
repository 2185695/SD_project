import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Search(){
    const [State, setState]= useState('')

  const  handleOnChange = event => {
        setState(event.target.value);
    };

    const stateSetter = () =>{
        sessionStorage.setItem('state', document.getElementById("myInput").value);
    }
    return (
    <div>
        <div className="search">
            <div className="input">
                <input type="text" placeholder="Search...." value={State.SearchValue} id="myInput" />
            </div>
            <Link data-testid="btn" to="/searchResults" >
                <button onClick={stateSetter}><img className="icons" src="./icons/search.png" alt="search" /></button >
            </Link>
        </div>
    </div>
    );
}    

export default Search;


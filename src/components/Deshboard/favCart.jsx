import React from 'react';
import { Link } from "react-router-dom";

function Favorites(){
    return(
        <Link to="/" >
            <div className="fav">
                <img className="favIcon" src="./icons/heart.svg" alt="heart"/>
            </div>
        </Link>
    );
}

function Cart(){
    return(
        <Link to="/Cart" >
            <div className="cart">
                <img className="favIcon" src="./icons/cart2.svg" alt="cart" />
            </div>
        </Link>
    );
}

export {Favorites, Cart};
import React from 'react';
import {Link } from 'react-router-dom';

function CatNavBar(){
  const allBooks = () =>{
    sessionStorage.setItem('deptCode', 3)
}

const allClothing = () =>{
  sessionStorage.setItem('deptCode', 6)
}

const allElectro = () =>{
  sessionStorage.setItem('deptCode', 1)
}

const allSports = () =>{
  sessionStorage.setItem('deptCode', 10)
}

const allHygiene = () =>{
  sessionStorage.setItem('deptCode', 8)
}
  return (
   
      <div className="catDiv">
        <Link to='/viewMore' onClick={allBooks}><div className="">
             <span className="catNavBar"><img className="icons" src="./icons/book.svg" alt="book" />Books</span> 
        </div></Link>

        <Link to='/viewMore' onClick={allClothing}><div className="">
             <span className="catNavBar"><img className="icons" src="./icons/tshirt.svg" alt="clot" /> Clothing</span>  
        </div></Link>

        <Link to='/viewMore' onClick={allElectro}><div className="">
             <span className="catNavBar"><img className="icons" src="./icons/technology.svg" alt="tech" />Electronics</span> 
        </div></Link>

        <Link to='/viewMore' onClick={allHygiene}><div className="">
           <span className="catNavBar"><img className="icons" src="./icons/shampoo.png" alt="health" />Health & Hygiene</span>     
        </div></Link>

        <Link to='/viewMore' onClick={allSports}><div className="">
          <span className="catNavBar"><img className="icons" src="./icons/sports.svg" alt="sport" />Sport & Training</span> 
        </div></Link>
        
      </div>

  );
}

export default CatNavBar;

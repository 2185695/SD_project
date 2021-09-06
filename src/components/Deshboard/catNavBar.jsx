import React from 'react';
import {useHistory } from 'react-router-dom';

function CatNavBar() {
  const history = useHistory();

  function navToPage(num) {
    history.push({
      pathname: "/viewMore",
      state: {Number: num}
    });
  }

  return (
   
      <div className="catDiv">
        <div style={{cursor: 'pointer'}}>
             <span onClick={() => navToPage(3)} className="catNavBar"><img className="icons" src="./icons/book.svg" alt="book" />Books</span> 
        </div>

        <div style={{cursor: 'pointer'}}>
             <span onClick={()=> navToPage(6)} className="catNavBar"><img className="icons" src="./icons/tshirt.svg" alt="clot" /> Clothing</span>  
        </div>

        <div style={{cursor: 'pointer'}}>
             <span onClick={()=> navToPage(1)} className="catNavBar"><img className="icons" src="./icons/technology.svg" alt="tech" />Electronics</span> 
        </div>

        <div style={{cursor: 'pointer'}}>
           <span onClick={()=> navToPage(8)} className="catNavBar"><img className="icons" src="./icons/shampoo.png" alt="health" />Health & Hygiene</span>     
        </div>

        <div style={{cursor: 'pointer'}}>
          <span onClick={()=> navToPage(10)} className="catNavBar"><img className="icons" src="./icons/sports.svg" alt="sport" />Sport & Training</span> 
        </div>
        
      </div>

  );
}

export default CatNavBar;

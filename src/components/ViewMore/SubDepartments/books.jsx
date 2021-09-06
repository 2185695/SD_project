
import React from 'react';
import { useHistory } from "react-router-dom";

function Books() {

    const history = useHistory();

    function navToPage(num) {
      history.push({
        pathname: "/subDepartments",
        state: {Number: num}
      });
    }

    function navToViewMore(num) {
        history.push({
          pathname: "/viewMore",
          state: {Number: num}
        });
    }

    return (
        <div className="viewMore_departments">
          <h3 className="departmentHeading">Departments</h3>
          <ul className="departmentItems">                    
              <li><h3 className="viewMore_department">Books</h3>
                  <ul className="viewMore_subDept">
                      <li onClick={()=> navToViewMore(3)} style={{cursor: 'pointer'}}>All Books</li>
                      <li onClick={()=> navToPage(104)} style={{cursor: 'pointer'}}>Fiction</li>
                      <li onClick={()=> navToPage(103)} style={{cursor: 'pointer'}}>Non Fiction</li>
                      <li style={{cursor: 'pointer'}}>Inspired Reading</li>
                      <li style={{cursor: 'pointer'}}>Children's Books</li>
                      <li style={{cursor: 'pointer'}}>Christian Living</li>
                      <li style={{cursor: 'pointer'}}>Cookbooks</li>
                      <li style={{cursor: 'pointer'}}>Bestsellers</li>
                  </ul>
              </li>
          </ul>
      </div>
    );
}

export default Books;
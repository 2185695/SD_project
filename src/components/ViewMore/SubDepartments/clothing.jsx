import React from 'react';
import { useHistory } from "react-router-dom";

function Clothing() {
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
                <li><h3 className="viewMore_department">Clothing</h3>
                    <ul className="viewMore_subDept">
                        <li onClick={()=> navToViewMore(6)} style={{cursor: 'pointer'}}>All Fashion</li>
                        <li onClick={()=> navToPage(109)} style={{cursor: 'pointer'}}>Men</li>
                        <li onClick={()=> navToPage(111)} style={{cursor: 'pointer'}}>Women</li>
                        <li onClick={()=> navToPage(110)} style={{cursor: 'pointer'}}>Kids</li>
                        <li onClick={()=> navToPage(128)} style={{cursor: 'pointer'}}>Watches</li>
                        <li onClick={()=> navToPage(129)} style={{cursor: 'pointer'}}>Eyewear</li>
                        <li onClick={()=> navToPage(131)} style={{cursor: 'pointer'}}>Footwear</li>
                        <li style={{cursor: 'pointer'}}>Head gear</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Clothing;
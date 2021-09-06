import React from 'react';
import { useHistory } from "react-router-dom";


function Sports() {
    const history = useHistory();

    function navToPage(num) {
      history.push({
        pathname: "/subDepartments",
        state: {Number: num}
      });
    }

    return (
        <div className="viewMore_departments2">
            <h3 className="departmentHeading">Departments</h3>
            <ul className="departmentItems">
                <li><h3 className="viewMore_department">Sports & Training</h3>
                    <ul className="viewMore_subDept">
                        <li onClick={()=> navToPage(124)} style={{cursor: 'pointer'}}>Cycling</li>
                        <li onClick={()=> navToPage(122)} style={{cursor: 'pointer'}}>Gym Equipment</li>
                        <li onClick={()=> navToPage(127)} style={{cursor: 'pointer'}}>Sports Equipment</li>
                        <li onClick={()=> navToPage(125)} style={{cursor: 'pointer'}}>Sports Nutrition</li>
                        <li onClick={()=> navToPage(126)} style={{cursor: 'pointer'}}>Sports Clothing</li>
                        <li onClick={()=> navToPage(123)} style={{cursor: 'pointer'}}>Yoga</li>
                        <li style={{cursor: 'pointer'}}>Running</li>
                        <li style={{cursor: 'pointer'}}>Water Sports</li>
                        <li style={{cursor: 'pointer'}}>Recovery</li> 
                        <li style={{cursor: 'pointer'}}>Sport Wearable Tech</li>
                        <li style={{cursor: 'pointer'}}>Sports Footwear</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Sports;
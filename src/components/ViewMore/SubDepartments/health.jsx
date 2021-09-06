import React from 'react';
import { useHistory } from "react-router-dom";

function Health() {
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
                <li><h3 className="viewMore_department">Health & Hygiene</h3>
                    <ul className="viewMore_subDept">
                        <li onClick={()=> navToPage(118)} style={{cursor: 'pointer'}}>Toiletries</li>
                        <li onClick={()=> navToPage(114)} style={{cursor: 'pointer'}}>Sanitize & First Aid</li>
                        <li onClick={()=> navToPage(119)} style={{cursor: 'pointer'}}>Bathroom</li>
                        <li onClick={()=> navToPage(120)} style={{cursor: 'pointer'}}>Dental Hygiene</li>
                        <li onClick={()=> navToPage(116)} style={{cursor: 'pointer'}}>Body Hygiene</li>
                        <li onClick={()=> navToPage(115)} style={{cursor: 'pointer'}}>Shaving/Grooming</li>
                        <li style={{cursor: 'pointer'}}>Health Care</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Health;
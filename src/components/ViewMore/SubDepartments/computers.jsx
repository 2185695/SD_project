import React from 'react';
import { useHistory } from "react-router-dom";

function Computers() {
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
                <li><h3 className="viewMore_department">Computer & Electronics</h3>
                    <ul className="viewMore_subDept">
                        <li onClick={()=> navToPage(100)} style={{cursor: 'pointer'}}>Laptops</li>
                        <li onClick={()=> navToPage(112)} style={{cursor: 'pointer'}}>Phones</li>
                        <li onClick={()=> navToPage(121)} style={{cursor: 'pointer'}}>Monitors</li>
                        <li style={{cursor: 'pointer'}}>Desktop</li>
                        <li style={{cursor: 'pointer'}}>Computer Components</li>
                        <li style={{cursor: 'pointer'}}>Computer Accessories</li>
                        <li style={{cursor: 'pointer'}}>Networking</li>
                        <li style={{cursor: 'pointer'}}>Software</li>
                        <li style={{cursor: 'pointer'}}>Storage Devices</li>
                        <li style={{cursor: 'pointer'}}>Photography</li>
                        <li style={{cursor: 'pointer'}}>Action Cams & Drones</li>
                        <li style={{cursor: 'pointer'}}>Vlogging</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Computers;
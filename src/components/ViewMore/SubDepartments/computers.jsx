import React from 'react';
import { Link } from "react-router-dom";

function Computers() {

    const Laptops = () =>{
        sessionStorage.setItem('SubdeptCode', 100)
    }
    const Phones = () =>{
        sessionStorage.setItem('SubdeptCode', 112)
    }
    const Monitors = () =>{
        sessionStorage.setItem('SubdeptCode', 121)
    }

    return (
        <div className="viewMore_departments2">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Computer & Electronics</h3>
                            <ul className="viewMore_subDept">
                                <li><Link to="/subDepartments" onClick={Laptops}>Laptops</Link></li>
                                <li><Link to="/subDepartments" onClick={Phones}>Phones</Link></li>
                                <li><Link to="/subDepartments" onClick={Monitors}>Monitors</Link></li>
                                <li><Link to="/">Desktop</Link></li>
                                <li><Link to="/">Computer Components</Link></li>
                                <li><Link to="/">Computer Accessories</Link></li>
                                <li><Link to="/">Networking</Link></li>
                                <li><Link to="/">Software</Link></li>
                                <li><Link to="/">Storage Devices</Link></li>
                                <li><Link to="/">Photography</Link></li>
                                <li><Link to="/">Action Cams & Drones</Link></li>
                                <li><Link to="/">Vlogging</Link></li>
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Computers;
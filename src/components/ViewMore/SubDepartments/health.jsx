import React from 'react';
import { Link } from "react-router-dom";

function Health() {

    const Toiletries = () =>{
        sessionStorage.setItem('SubdeptCode', 118)
    }
    
    const Sanitize = () =>{
        sessionStorage.setItem('SubdeptCode', 114)
    }
    const Bathroom = () =>{
        sessionStorage.setItem('SubdeptCode', 119)
    }
    const Dental = () =>{
        sessionStorage.setItem('SubdeptCode', 120)
    }
    const BodyHygiene = () =>{
        sessionStorage.setItem('SubdeptCode', 116)
    }
    const Shaving = () =>{
        sessionStorage.setItem('SubdeptCode', 115)
    }

    return (
        <div className="viewMore_departments2">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Health & Hygiene</h3>
                            <ul className="viewMore_subDept">
                                <li><Link to="/subDepartments" onClick={Toiletries}>Toiletries</Link></li>
                                <li><Link to="/subDepartments" onClick={Sanitize}>Sanitize & First Aid</Link></li>
                                <li><Link to="/subDepartments" onClick={Bathroom}>Bathroom</Link></li>
                                <li><Link to="/subDepartments" onClick={Dental}>Dental Hygiene</Link></li>
                                <li><Link to="/subDepartments" onClick={BodyHygiene}>Body Hygiene</Link></li>
                                <li><Link to="/subDepartments" onClick={Shaving}>Shaving/Grooming</Link></li>
                                <li><Link to="/">Health Care</Link></li>
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Health;
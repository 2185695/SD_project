import React from 'react';
import { Link } from "react-router-dom";

function Clothing() {

    const allFashion = () =>{
        sessionStorage.setItem('deptCode', 6)
    }
    
    const Men = () =>{
        sessionStorage.setItem('SubdeptCode', 109)
    }
    const Women = () =>{
        sessionStorage.setItem('SubdeptCode', 111)
    }
    const Kids = () =>{
        sessionStorage.setItem('SubdeptCode', 110)
    }
    const Eyewear = () =>{
        sessionStorage.setItem('SubdeptCode', 129)
    }
    const Watches = () =>{
        sessionStorage.setItem('SubdeptCode', 128)
    }
    const Footwear = () =>{
        sessionStorage.setItem('SubdeptCode', 131)
    }

    return (
        <div className="viewMore_departments">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Clothing</h3>
                            <ul className="viewMore_subDept">
                                <li><Link to="/viewMore" onClick={allFashion}>All Fashion</Link></li>
                                <li><Link to="/subDepartments" onClick={Men}>Men</Link></li>
                                <li><Link to="/subDepartments" onClick={Women}>Women</Link></li>
                                <li><Link to="/subDepartments" onClick={Kids}>Kids</Link></li>
                                <li><Link to="/subDepartments" onClick={Watches}>Watches</Link></li>
                                <li><Link to="/subDepartments" onClick={Eyewear}>Eyewear</Link></li>
                                <li><Link to="/subDepartments" onClick={Footwear}>Footwear</Link></li>
                                <li><Link to="/">Head gear</Link></li>
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Clothing;
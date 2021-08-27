import React from 'react';
import { Link } from "react-router-dom";


function Sports() {
    const Cycling = () =>{
        sessionStorage.setItem('SubdeptCode', 124)
    }
    
    const Gym = () =>{
        sessionStorage.setItem('SubdeptCode', 122)
    }
    const SportsEquipment = () =>{
        sessionStorage.setItem('SubdeptCode', 127)
    }
    const SportsNutrition = () =>{
        sessionStorage.setItem('SubdeptCode', 125)
    }
    const SportsClothing = () =>{
        sessionStorage.setItem('SubdeptCode', 126)
    }
    const Yoga = () =>{
        sessionStorage.setItem('SubdeptCode', 123)
    }

    return (
        <div className="viewMore_departments2">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Sports & Training</h3>
                            <ul className="viewMore_subDept">
                                <li><Link to="/subDepartments" onClick={Cycling}>Cycling</Link></li>
                                <li><Link to="/subDepartments" onClick={Gym}>Gym Equipment</Link></li>
                                <li><Link to="/subDepartments" onClick={SportsEquipment}>Sports Equipment</Link></li>
                                <li><Link to="/subDepartments" onClick={SportsNutrition}>Sports Nutrition</Link></li>
                                <li><Link to="/subDepartments" onClick={SportsClothing}>Sports Clothing</Link></li>
                                <li><Link to="/subDepartments" onClick={Yoga}>Yoga</Link></li>
                                <li><Link to="/">Individual Sports</Link></li>
                                <li><Link to="/">Running</Link></li>
                                <li><Link to="/">Team Sports</Link></li>
                                <li><Link to="/">Watersports</Link></li>
                                <li><Link to="/">Recovery</Link></li> 
                                <li><Link to="/">Sport Wearable Tech</Link></li>
                                <li><Link to="/">Sports Footwear</Link></li>
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Sports;
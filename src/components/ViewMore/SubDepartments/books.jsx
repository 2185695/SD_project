
import React,{useState} from 'react';
import { Link } from "react-router-dom";

function Books() {

    // these are the functions for individual links, the codes im passing are just random because i dont know them
    const allBooks = () =>{
        sessionStorage.setItem('deptCode', 3)
    }
    
    const Fiction = () =>{
        sessionStorage.setItem('SubdeptCode', 104)
    }
    const NonFiction = () =>{
        sessionStorage.setItem('SubdeptCode', 103)
    }
    const InspiredReading = () =>{
        sessionStorage.setItem('SubdeptCode', 123)
    }
    const ChildrenBooks = () =>{
        sessionStorage.setItem('SubdeptCode', 114)
    }
    const ChristianLiving = () =>{
        sessionStorage.setItem('SubdeptCode', 113)
    }
    const Cookbooks = () =>{
        sessionStorage.setItem('SubdeptCode', 109)
    }
    const Bestsellers = () =>{
        sessionStorage.setItem('SubdeptCode', 114)
    }

    return (
        <div className="viewMore_departments">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Books</h3>
                            <ul className="viewMore_subDept">

                                <li><Link to="/viewMore" onClick={allBooks}>All Books</Link></li>

                                <li><Link to="/subDepartments" onClick={Fiction}>Fiction</Link></li>
                                <li><Link to="/subDepartments" onClick={NonFiction}>Non Fiction</Link></li>
                                <li><Link to="/" >Inspired Reading</Link></li>
                                <li><Link to="/" >Children's Books</Link></li>
                                <li><Link to="/" >Christian Living</Link></li>
                                <li><Link to="/" >Cookbooks</Link></li>
                                <li><Link to="/" >Bestsellers</Link></li>
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Books;
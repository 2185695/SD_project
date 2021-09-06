import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../Deshboard/Header';
import Nav from '../Deshboard/catNavBar';
import Footer from "../Deshboard/Footer";
import ItemBox from "../Deshboard/itemBox";
import Books from "./SubDepartments/books";
import Clothing from "./SubDepartments/clothing";
import Computers from "./SubDepartments/computers";
import Sports from "./SubDepartments/sports";
import Health from "./SubDepartments/health";

function ViewMore() {
    const location = useLocation();
    const [items, setItems] = useState([]);
    const [dept_code, setCode] = useState([]);

    useEffect( () => {
        const deptCode = async() => {
            setCode(location.state.Number);

            await axios.post("https://lamp.ms.wits.ac.za/home/s2172765/products.php", { ID: location.state.Number })
            .then(response => setItems(response.data))
            .catch(error => console.log(error));
        }
        deptCode();
    });

    // SET THE CATEGORY TITLE DYNAMICALLY
    var category = "";
    let dept;

    if (dept_code === 1){
        category = "Computer & Electronics";
        dept = <Computers/>;
    }
    else if (dept_code === 3){
        category = "Books";
        dept = <Books/>;
    }
    else if (dept_code === 8){
        category = "Health & Hygiene";
        dept = category;
        dept = <Health/>;
    }
    else if (dept_code === 10){
        category = "Sports & Training";
        dept = category;
        dept = <Sports/>;
    }
    else if (dept_code === 6){
        category = "Clothing";
        dept = category;
        dept = <Clothing/>;
    }

    return(
        <div>
            <Header/>
            <Nav/>

            <div className="body">
                {dept}

                <div className="feedCategories">
                
                    <div className="titlebtn">
                        <h2 id="daily">{category}</h2>
                    </div>

                    <div className="items">{items.map((item, index)=><ItemBox category="Daily deals" key={index} itemName={item.NAME.slice(0,30)} orgPrice={item.PRICE} image={item.PICTURE} discount="" rating="0(0)" desc={item.DESCRIPTION}></ItemBox>)}</div>

                </div>
            </div>
            
            <Footer/>
        </div>

    );
}

export default ViewMore;
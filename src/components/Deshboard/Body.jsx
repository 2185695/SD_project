import React from 'react';
import DepartmentsBar from "./departmentsBar";
import { useHistory } from 'react-router-dom';
import {Items, Items2, Items3, Items4, Items5} from "./items";

function Body() {
    const history = useHistory();
    function navToPage(num) {
        history.push({
            pathname: "/viewMore",
            state: {Number: num}
        });
    }
    
    return(
    <div className="body">
        <DepartmentsBar />
        <div className="feed">
            <div className="feedCategories">
                <div className="titlebtn">
                    <h2 id="daily">Books</h2>
                    <button onClick={() => navToPage(3)}>View More</button>
                </div>

                <Items />
            </div>

            <div className="feedCategories">
                <div className="titlebtn">
                    <h2 id="computer">Computer & Electronics</h2>
                    <button onClick={() => navToPage(1)}>View More</button>
                </div>

                <Items2 />
            </div>

            <div className="feedCategories">
                <div className="titlebtn">
                    <h2 id="computer">Clothing</h2>
                    <button onClick={() => navToPage(6)}>View More</button>
                </div>

                <Items3 />
            </div>

            <div className="feedCategories">
                <div className="titlebtn">
                    <h2 id="daily">Hygiene</h2>
                    <button onClick={() => navToPage(8)}>View More</button>
                </div>

                <Items4 />
            </div> 

            <div className="feedCategories">
                <div className="titlebtn">
                    <h2 id="computer">Sport & Training</h2>
                    <button onClick={() => navToPage(10)}>View More</button>
                </div>

                <Items5 />
            </div>

        </div>

    </div>

    );
}

export { Body };
//, departmentCode
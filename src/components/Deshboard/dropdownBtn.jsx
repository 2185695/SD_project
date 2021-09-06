import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

const DropdownBtn = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const history = useHistory();

  function navToPage(num) {
    history.push({
      pathname: "/subDepartments",
      state: {Number: num}
    });
  }

  function navToViewMore(num) {
    history.push({
      pathname: "/viewMore",
      state: {Number: num}
    });
  }

  return (
    <div className='dropdown'>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
            All Departments
        </DropdownToggle>

        <div className='droplist'>
        <DropdownMenu>
            <DropdownItem onClick={()=>navToViewMore(3)}>Books & Courses</DropdownItem>
            <DropdownItem onClick={()=>navToPage(112)}>Cellphones</DropdownItem>
            <DropdownItem onClick={()=>navToPage(128)}>Watches</DropdownItem>
            <DropdownItem onClick={()=>navToPage(122)}>Gym Equipment</DropdownItem>
            <DropdownItem onClick={()=>navToViewMore(6)}>Fashion</DropdownItem>
            <DropdownItem onClick={()=>navToViewMore(1)}>Computers & Electronics</DropdownItem>
            <DropdownItem onClick={()=>navToViewMore(8)}>Health & Hygiene</DropdownItem>
            <DropdownItem onClick={()=>navToViewMore(10)}>Sport & Training</DropdownItem>
        </DropdownMenu>
        </div>

        </ButtonDropdown>
    </div>
  );
}

export default DropdownBtn;

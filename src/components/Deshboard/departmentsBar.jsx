import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const DepartmentsBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const history = useHistory();

    function navToPage(num) {
      history.push({
        pathname: "/subDepartments",
        state: {Number: num}
      });
    }
  
    return (
        <div className="departments">
            <h3 className="departmentHeading">Departments</h3>
            <div>
                <Navbar light expand="md" >
                    <NavbarToggler onClick={toggle}  />
                    <Collapse isOpen={isOpen} navbar >
                        <Nav navbar >
                            <div>
                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav caret caret-color="primary" >
                                        <span class="department" >Books</span>
                                    </DropdownToggle>

                                    <div className="depDroplist"  > 
                                        <DropdownMenu left color="primary" >
                                            <DropdownItem onClick={()=>navToPage(104)}>Fiction</DropdownItem>
                                            <DropdownItem onClick={()=>navToPage(103)}>Non Fiction</DropdownItem>
                                            <DropdownItem >Inspired Reading</DropdownItem>
                                            <DropdownItem >Children's Books</DropdownItem>
                                            <DropdownItem >Christian Living</DropdownItem>
                                            <DropdownItem >Cookbooks</DropdownItem>
                                            <DropdownItem >Bestsellers</DropdownItem>
                                        </DropdownMenu>
                                    </div>
                                </UncontrolledDropdown> 
                            </div>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

            <div>
            <Navbar light expand="md" >
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar >
                        <Nav navbar>
                            <div>
                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav caret caret-color="warning" >
                                        <span class="department">Clothing</span>
                                    </DropdownToggle>

                                    <div className="depDroplist"  >
                                        <DropdownMenu left color="primary">
                                            <DropdownItem onClick={()=> navToPage(109)}>Men</DropdownItem>
                                            <DropdownItem onClick={()=> navToPage(111)}>Women</DropdownItem>
                                            <DropdownItem onClick={()=> navToPage(110)}>Kids</DropdownItem>
                                            <DropdownItem onClick={()=> navToPage(129)}>Eyewear</DropdownItem>
                                            <DropdownItem onClick={()=> navToPage(131)}>Footwear</DropdownItem>
                                            <DropdownItem onClick={()=> navToPage(128)}>Watches</DropdownItem>
                                            <DropdownItem >Head gear</DropdownItem>
                                        </DropdownMenu>
                                    </div>
                                </UncontrolledDropdown> 
                            </div>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

            <div>
                <Navbar light expand="md" >
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar >
                            <Nav navbar>
                                <div>
                                    <UncontrolledDropdown nav inNavbar >
                                        <DropdownToggle nav caret caret-color="warning" >
                                            <span class="department">Computer & Electronics</span>
                                        </DropdownToggle>

                                        <div className="depDroplist"  >
                                            <DropdownMenu left color="primary">
                                                <DropdownItem onClick={()=>navToPage(100)}>Laptops</DropdownItem>
                                                <DropdownItem onClick={()=>navToPage(112)}>Phones</DropdownItem>
                                                <DropdownItem onClick={()=>navToPage(121)}>Monitors</DropdownItem>
                                                <DropdownItem >Desktop</DropdownItem>
                                                <DropdownItem >Computer Components</DropdownItem>
                                                <DropdownItem >Computer Accessories</DropdownItem>
                                                <DropdownItem >Laptop Accessories</DropdownItem>
                                                <DropdownItem >Networking</DropdownItem>
                                                <DropdownItem >Storage Devices</DropdownItem>
                                                <DropdownItem >Photography</DropdownItem>
                                                <DropdownItem >Action Cams & Drones</DropdownItem>
                                            </DropdownMenu>
                                        </div>
                                    </UncontrolledDropdown> 
                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>

                <div>
                <Navbar light expand="md" >
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar >
                            <Nav navbar>
                                <div> 
                                    <UncontrolledDropdown nav inNavbar >
                                        <DropdownToggle nav caret caret-color="warning" >
                                            <span class="department">Health & Hygiene</span>
                                        </DropdownToggle>

                                        <div className="depDroplist"  >
                                            <DropdownMenu left color="primary">
                                                <DropdownItem onClick={()=>navToPage(118)}>Toiletries</DropdownItem>
                                                <DropdownItem onClick={()=>navToPage(114)}>Sanitize & First Aid</DropdownItem>
                                                <DropdownItem onClick={()=>navToPage(119)}>Bathroom</DropdownItem>
                                                <DropdownItem onClick={()=>navToPage(120)}>Dental Hygiene</DropdownItem>
                                                <DropdownItem onClick={()=>navToPage(116)}>Body Hygiene</DropdownItem>
                                                <DropdownItem onClick={()=>navToPage(115)}>Shaving/Grooming</DropdownItem>
                                                <DropdownItem >Health Care</DropdownItem>
                                                <DropdownItem >Medicine & Treatments</DropdownItem>
                                                <DropdownItem >Health Care Devices</DropdownItem>
                                                <DropdownItem >Sexual Health</DropdownItem>
                                                <DropdownItem >Wellness Store</DropdownItem>
                                            </DropdownMenu>
                                        </div>
                                    </UncontrolledDropdown> 
                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div> 


                <div>
                <Navbar light expand="md" >
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar >
                            <Nav navbar>
                                <div>
                                    <UncontrolledDropdown nav inNavbar >
                                        <DropdownToggle nav caret caret-color="warning" >
                                            <span class="department">Sport & Training</span>
                                        </DropdownToggle>

                                        <div className="depDroplist"  >
                                            <DropdownMenu left color="primary">       
                                                <DropdownItem onClick={()=>navToPage(124)}>Cycling</DropdownItem>
                                                <DropdownItem onClick={()=>navToPage(122)}>Gym Equipment</DropdownItem>
                                                <DropdownItem onClick={()=>navToPage(127)}>Sport Equipment</DropdownItem>                                      
                                                <DropdownItem onClick={()=>navToPage(125)}>Sports Nutrition</DropdownItem>
                                                <DropdownItem onClick={()=>navToPage(126)}>Sports Clothing</DropdownItem>
                                                <DropdownItem onClick={()=>navToPage(123)}>Yoga</DropdownItem>
                                                <DropdownItem >Running</DropdownItem>
                                                <DropdownItem >Team Sports</DropdownItem>
                                                <DropdownItem >Water Sports</DropdownItem>
                                                <DropdownItem >Recovery</DropdownItem>
                                                <DropdownItem >Sport Wearable Tech</DropdownItem>
                                            </DropdownMenu>
                                        </div>
                                    </UncontrolledDropdown> 
                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>

                <div>
                <Navbar light expand="md" >
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar >
                            <Nav navbar>
                                <div>   
                                    <UncontrolledDropdown nav inNavbar >
                                        <DropdownToggle nav caret caret-color="warning" >
                                            <span class="department">Other</span>
                                        </DropdownToggle>

                                        <div className="depDroplist"  >
                                            <DropdownMenu left color="primary">
                                                <DropdownItem >Others</DropdownItem>
                                            </DropdownMenu>
                                        </div>
                                    </UncontrolledDropdown> 
                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                </div>);
}

export default DepartmentsBar;
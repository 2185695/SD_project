import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const DepartmentsBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [deptCode, setDeptCode]= useState();
    sessionStorage.setItem('SubdeptCode', deptCode);

    return (
        <div className="departments">
            <h3 className="departmentHeading">Departments</h3>


            <div>
                <Navbar light expand="md" >
                    <NavbarToggler onClick={toggle}  />
                    <Collapse isOpen={isOpen} navbar >
                        <Nav navbar >
                            <div >
                                    
                                <UncontrolledDropdown nav inNavbar >

                                    <DropdownToggle nav caret caret-color="primary" >
                                        <span class="department" >Books</span>
                                    </DropdownToggle>

                                    <div className="depDroplist"  >
                                        
                                        <DropdownMenu left color="primary" >

                                            <DropdownItem  onClick={()=>setDeptCode(104)}>
                                            <Link to="/subDepartments">Fiction</Link>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(103)}>
                                            <Link to="/subDepartments">Non Fiction</Link>
                                            </DropdownItem>

                                            <DropdownItem>
                                            <Link to="/">Inspired Reading</Link>
                                            
                                            </DropdownItem>

                                            <DropdownItem>
                                            <Link to="/">Children's Books</Link>
                                            
                                            </DropdownItem>

                                            <DropdownItem >
                                            <Link to="/">Christian Living</Link>
                                            
                                            </DropdownItem>

                                            <DropdownItem >
                                            <Link to="/">Cookbooks</Link>
                                               
                                            </DropdownItem>

                                            <DropdownItem >
                                            <Link to="/">Bestsellers</Link>
                                            
                                            </DropdownItem>

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
                                            <DropdownItem onClick={()=>setDeptCode(6)}>
                                                <Link to="/viewMore">All Fashion</Link>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(109)}>
                                                <Link to="/subDepartments">Men</Link>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(111)}>
                                                <Link to="/subDepartments">Women</Link>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(110)}>
                                                <Link to="/subDepartments">Kids</Link>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(129)}>
                                                <Link to="/subDepartments">Eyewear</Link>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(131)}>
                                                <Link to="/subDepartments">Footwear</Link>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(128)}>
                                                <Link to="/subDepartments">Watches</Link>
                                            </DropdownItem>

                                            <DropdownItem >
                                            <Link to="/">Head gear</Link>
                                            
                                            </DropdownItem>

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

                                                <DropdownItem  onClick={()=>setDeptCode(100)}>
                                                    <Link to="/subDepartments">Laptops</Link>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(112)}>
                                                    <Link to="/subDepartments">Phones</Link>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(121)}>
                                                    <Link to="/subDepartments">Monitors</Link>
                                                </DropdownItem>

                                                <DropdownItem>
                                                <Link to="/">Desktop</Link>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <Link to="/">Computer Components</Link>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <Link to="/">Computer Accessories</Link>
                                                
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Laptop Accessories</Link>
                                                   
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Networking</Link>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Software</Link>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Storage Devices</Link>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Photography</Link>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Action Cams & Drones</Link>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                    <Link to="/">Vlogging</Link>
                                                
                                                </DropdownItem>

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

                                                <DropdownItem  onClick={()=>setDeptCode(118)}>
                                                    <Link to="/subDepartments">Toiletries</Link>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(114)}>
                                                    <Link to="/subDepartments">Sanitize & First Aid</Link>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(119)}>
                                                    <Link to="/subDepartments">Bathroom</Link>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(120)}>
                                                    <Link to="/subDepartments">Dental Hygiene</Link>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(116)}>
                                                    <Link to="/subDepartments">Body Hygiene</Link>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(115)}>
                                                    <Link to="/subDepartments">Shaving/Grooming</Link>
                                                </DropdownItem>

                                                <DropdownItem>
                                                <Link to="/">Health Care</Link>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <Link to="/">Medicine & Treatments</Link>
                                                
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Health Care Devices</Link>
                                                
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Sexual Health</Link>
                                                   
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Wellness Store</Link>
                                                
                                                </DropdownItem>

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
                                                <DropdownItem>
                                                <Link to="/">All Sport</Link>
                                                
                                                </DropdownItem>
                                                
                                                <DropdownItem  onClick={()=>setDeptCode(124)}>
                                                    <Link to="/subDepartments">Cycling</Link>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(122)}>
                                                    <Link to="/subDepartments">Gym Equipment</Link>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(127)}>
                                                    <Link to="/subDepartments">Sport Equipment</Link>
                                                </DropdownItem>
                                                
                                                <DropdownItem  onClick={()=>setDeptCode(125)}>
                                                    <Link to="/subDepartments">Sports Nutrition</Link>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(126)}>
                                                    <Link to="/subDepartments">Sports Clothing</Link>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(123)}>
                                                    <Link to="/subDepartments">Yoga</Link>
                                                </DropdownItem>

                                                <DropdownItem>
                                                <Link to="/">Individual Sports</Link>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <Link to="/">Running</Link>
                                                
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Team Sports</Link>
                                                
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Watersports</Link>
                                                   
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Treadmills & Bikes</Link>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Dumbbells</Link>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Yoga Mats</Link>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Recovery</Link>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <Link to="/">Sport Wearable Tech</Link>
                                                
                                                </DropdownItem>


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
                                                <DropdownItem>
                                                <Link to="/">Others</Link>
                                                
                                                </DropdownItem>
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
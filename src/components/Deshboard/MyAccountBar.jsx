import React,{Component} from 'react';
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";
import { Link } from 'react-router-dom';

class MyAccountBar extends Component{
    
    render(){
        return  <div className="departments">
                    <h3 className="departmentHeading">My Account</h3>
                    
                    <ul className="departmentItems">
                        
                        <li><Link style={{textDecoration: 'none'}} className="department">Orders</Link>
                            <ul id="booksStationery" className="subDepartment">
                                <li><Link to="/Cart">Orders</Link></li>
                                <li><Link onClick={()=>{
                                    const input = document.getElementById("invoice");
                                    html2canvas(input)
                                        .then((canvas) => {
                                            const imgData = canvas.toDataURL('image/png');
                                            const pdf = new jsPDF();
                                            pdf.addImage(imgData, 'JPEG', 0, 0);
                                            pdf.save(`wits_marketplace_invoice.pdf`);
                                        }).finally(()=>{
                                            window.open("https://lamp.ms.wits.ac.za/home/s1671848/SD_Project/#/OrderHistory","_self");
                                        }
                                        )

                                }}>Invoices</Link></li>
                               
                            </ul>
                        </li>
                        
                        <li><Link style={{textDecoration: 'none'}} className="department">Payments & Credit</Link>
                            <ul id="clothing-bags" className="subDepartment">
                                <li><Link to="/">Credit & Refunds</Link></li>
                                <li><Link to="/">Redeem Gift Vouchers</Link></li>
                            </ul>
                        </li>
                        
                        <li><Link style={{textDecoration: 'none'}} className="department">Customer Information</Link>
                            <ul id="computerElectronics" className="subDepartment">
                                <li><Link to="/">Personal Details</Link></li>
                                <li><Link to="/">Address Book</Link></li>
                                <li><Link to="/">Newsletter Subscription</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>;
    }
}

export default MyAccountBar;
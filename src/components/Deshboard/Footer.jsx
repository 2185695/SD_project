import React,{Component} from 'react';
import {Link } from 'react-router-dom';


class Footer extends Component{
    render(){
        return  <div className='test'>
                <div className="footer">

                    <div className="footer-item">
                            <h3>Shop</h3>
                            <p><Link to="/">Daily Deals</Link></p>
                            <p><Link to="/">Gift Vouchers</Link></p>
                    <img src="./images/LOGO.png" alt="Logo"/>

                        </div>

                        <div className="footer-item">
                            <h3>Help</h3>
                            <p><Link to="/">Help</Link></p>
                            <p><Link to="/">Contact Us</Link></p>
                            <p><Link to="/">Submit an Idea</Link></p>
                            <p><Link to="/">Suggest a Product</Link></p>
                            <p><Link to="/">Shipping & Delivery</Link></p>
                            <p><Link to="/">Exchanges & Returns</Link></p>
                        </div>

                        <div className="footer-item">
                            <h3>Account</h3>
                            <p><Link to="/">My Account</Link></p>
                            <p><Link to="/">Track Order</Link></p>
                            <p><Link to="/">Exchanges & Returns</Link></p>
                            <p><Link to="/">Invoices</Link></p>
                        </div>
                        <div className="footer-item">
                            <h3>Company</h3>
                            <p><Link to="/">About Us</Link></p>  
                            <p><Link to="/">Careers</Link></p>
                            <p><Link to="/">Sell on Wits Marketplace</Link></p>
                            <p><Link to="/">Deliver for Wits Marketplace</Link></p>
                            <p><Link to="/">Press & News</Link></p>
                            <p><Link to="/">Competitions</Link></p>
                            <p><Link to="/">Terms & Conditions</Link></p>
                            <p><Link to="/">Privacy Policy</Link></p>
                        </div>
                </div>;
                <div className="copyright">
                <p>Wits Marketplace &copy; 2021</p>
                </div>
            </div>

    }
}

export default Footer;
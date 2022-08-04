import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"
import logo from "../../front/img/logo.png"

const Header = ({ cartItems}) =>{
    return(
       <header className="header">
           <div>
               <h1>
                   <Link to="/" className="logo">
                        <img src={logo} className="logo-img"/>
                   </Link>
               </h1>
           </div>
           <div className="header-links">
               <ul>
                   <li>
                        <Link to="/" className="cart">
                            <i class="fas fa-home"></i>
                        </Link>
                   </li>
               </ul>
                
                <ul>
                    <li>
                        <Link to="/Cart" className="cart">
                            <i class="fas fa-cart-plus"></i>
                            <span className="cart-length">
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>

           </div>
       </header>
    )
}

export default Header
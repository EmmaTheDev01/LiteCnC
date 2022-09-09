import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
import {ButtonContainer} from './Button';
import Sidemenu from './Sidemenu';
import Cars from './pages/Cars'
import Cottages from './pages/Cottages'
import CartBadge from './CartBadge';
// import Search from './Search';
class Navbar extends Component {
    render() {
    
        return (
            <div>
            {/* navigation bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-sm-5">
                {/* This is my nav bar logo component */}
                <div className="container-fluid">
                   <Sidemenu />
                   
                    {/* Navigation bar menus */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main-navbar">
                        <div className="navbar-nav ms-auto">
                            
                            <Link to="/booking" className="link">
                                <div className="nav-link active">Booking</div>
                            </Link>
                            <Link to="/brands" className="link">
                                <div className="nav-link active">Brands</div>
                            </Link>
                           
                           
                        
                                <div className="nav-link active"> <Cars/> </div>
                           
                            
                           
                                <div className="nav-link active"><Cottages /></div>
                            
                          
                            {/* <Search /> */}
                           
                        </div>
                         {/* Products cart or wishlist*/}
                        <Link to="/cart">
                            <ButtonContainer className="cart-icon">
                              <CartBadge />
                            <span className="d-md-none d-xs-block ms-2 title">Wishlist</span>
                            </ButtonContainer>
                        </Link>
                    </div>
                </div>
            </nav> 
            </div>
        );
    }
}

export default Navbar;
